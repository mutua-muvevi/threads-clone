"use server";
import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
	mongoose.set("strictQuery", true);

	if(!process.env.MONGODB_URI) throw new Error("MONGODB_URI not set");

	if(isConnected) return console.log("=> using existing database connection");

	try {
		await mongoose.connect(process.env.MONGODB_URI);

		isConnected = true;

		console.log("=> new database connection");	
	} catch (error) {
		console.log("Error connecting to database: ", error);
	}
};