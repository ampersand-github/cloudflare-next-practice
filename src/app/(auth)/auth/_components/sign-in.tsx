import { signIn } from "@/lib/auth";

export const SignIn = () => (
	<form
		action={async () => {
			"use server";
			await signIn();
		}}
	>
		<button type="submit">Sign in with Google</button>
	</form>
);
