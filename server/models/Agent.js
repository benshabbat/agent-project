import mongoose from "mongoose";
const { Schema, model } = mongoose;

const AgentSchema = new Schema(
  {
    agentCode: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      unique: true,
    },
    passwordHash: {
      type: String,
    },
    role:{
      type: String,
      enum: ["agent", "admin"],
      default: "agent",
    }
  },
  { timestamps: true }
);


export default model("Agent", AgentSchema);