import { Profile } from "./_components/profile";
import { SignIn } from "./_components/sign-in";
import { SignOut } from "./_components/sign-out";

export default () => {
	return (
		<div>
			<SignIn />
			<SignOut />
			<Profile />
		</div>
	);
};
