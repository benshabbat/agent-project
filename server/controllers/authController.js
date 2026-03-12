import Agent from "../models/Agent.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const atbashCipher = (str) => {
  return str
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") {
        return String.fromCharCode(
          "z".charCodeAt(0) - (char.charCodeAt(0) - "a".charCodeAt(0)),
        );
      } else if (char >= "A" && char <= "Z") {
        return String.fromCharCode(
          "Z".charCodeAt(0) - (char.charCodeAt(0) - "A".charCodeAt(0)),
        );
      } else {
        return char;
      }
    })
    .join("");
};

//register
export const register = async (req, res) => {
  const { agentCode, fullName, ...rest } = req.body;
  if (!agentCode || !fullName) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const isExistAgent = await Agent.findOne({ agentCode });
  if (isExistAgent) {
    return res.status(400).json({ message: "Agent code already exists" });
  }
  const passwordAtbash = atbashCipher(fullName);
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(passwordAtbash, salt);

  await Agent.create({
    agentCode,
    fullName,
    passwordHash: hashPassword,
    ...rest,
  });

  res.status(200).json({
    message: "Registration successful",
    yourFirstPassword: passwordAtbash,
  });
};

export const login = async (req, res) => {
  const { agentCode, password } = req.body;
  if (!agentCode || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const agent = await Agent.findOne({ agentCode });
  if (!agent) {
    return res.status(400).json({ message: "Invalid agent code or password" });
  }
  const isMatch = await bcrypt.compare(password, agent.passwordHash);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid agent code or password" });
  }

  const token = jwt.sign(
    { id: agent._id, agentCode: agent.agentCode },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );
  res
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 3600000,
    })
    .status(200)
    .json({id: agent._id });
};
