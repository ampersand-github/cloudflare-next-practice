import { signOut } from "@/lib/auth";

export const SignOut = () => (
	<form
		action={async () => {
			"use server";
			await signOut();
		}}
	>
		<button type="submit">Sign Out</button>
	</form>
);
