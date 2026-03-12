import jwt from "jsonwebtoken";
import Agent from "../models/Agent.js";


export const verifyToken = (req, res, next) => {  
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded) {
        return res.status(403).json({ message: "Forbidden" });
    }

    const agent = Agent.findById(decoded.id);
    req.agent = decoded;



    next();
}