"use server";

import { revalidatePath } from "next/cache";
import User from "../model/user.model";
import { connectToDatabase } from "../mongoose";

interface Params {
	userId: string;
	username: string;
	firstname: string;
	lastname: string;
	bio: string;
	profile_photo: string;
	path: string;
}

export async function updateUser({
	userId,
	bio,
	firstname,
	lastname,
	path,
	username,
	profile_photo,
}: Params): Promise<void> {
	connectToDatabase();

	try {
		await User.findOneAndUpdate(
			{ id: userId },
			{
				profile_photo,
				firstname,
				lastname,
				username: username.toLowerCase(),
				bio,
			},
			{
				upsert: true,
				runValidators: true,
			},
		);

		if (path === "/profile/edit") {
			revalidatePath(path);
		}
	} catch (error: any) {
		throw new Error(`error updating user: ${error.message}`);
	}
}
