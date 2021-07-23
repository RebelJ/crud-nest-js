/**
 * Class Users Model 
 * @author : Revel Jean-Baptiste
 * @version : 1.0
 */

import * as mongoose from "mongoose";
import { Interface } from "readline";

export const UserSchema = new mongoose.Schema({
	email: { type: String, requied: true },
	password: { type: String, requied: true },
});

export interface User extends mongoose.Document{
	id: string;
	email: string;
	password: string;
	 
}