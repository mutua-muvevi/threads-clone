import * as z from "zod";

export const UserValidation = z.object({
	profile_photo: z.string().url().min(1).max(255),
	firstname: z.string().min(3, { message: "Minimum characters required is 3" }).max(30, { message: "Maximum characters required is 30" }),
	lastname: z.string().min(3, { message: "Minimum characters required is 3" }).max(30, { message: "Maximum characters required is 30" }),
	username: z.string().min(3, { message: "Minimum characters required is 3" }).max(30, { message: "Maximum characters required is 30" }),
	bio: z.string().min(3, { message: "Minimum characters required is 3" }).max(1000, { message: "Maximum characters required is 1000" }),
});