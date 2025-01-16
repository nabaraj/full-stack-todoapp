import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  googleId: string;
  email: string;
  password?: string;
  name: string;
  jwtTokens: string[];
}

const UserSchema: Schema = new Schema({
  googleId: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  name: { type: String, required: true },
  jwtTokens: [{ type: String }]
});

export default mongoose.model<IUser>("User", UserSchema);
