import mongoose, { Schema } from "mongoose";
import { UserType } from "../types/UserType";

const UserSchema: Schema<UserType> = new Schema({
	id: String,
	email: String,
	password: String,
});

export const UserModel: mongoose.Model<UserType> = mongoose.model(
	"users",
	UserSchema
);
