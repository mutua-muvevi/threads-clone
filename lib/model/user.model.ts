import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	id: { type: String, required: true },
	profile_photo: { type: String, required: true },
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	bio: { type: String, required: true },
	threads: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Thread"
		}
	],
	onboarded: { type: Boolean, default: false },
	communities : [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Community"
		}
	]
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;