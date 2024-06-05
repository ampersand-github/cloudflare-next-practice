import { auth } from "@/lib/auth";
import { client } from "@/lib/hono/clinet";

export const Profile = async () => {
	const session = await auth();

	const res = await client.api.health.count.$get();
	responseErrorHandling(res);
	const data = await res.json();

	return (
		<div>
			<h1>Profile</h1>
			<p>{JSON.stringify(session?.user?.email)}</p>
			<p>{JSON.stringify(data.count)}</p>
		</div>
	);
};

const responseErrorHandling = (res: Response) => {
	if (!res.ok) {
		console.error("Failed to fetch");
		throw new Error("Failed to fetch");
	}
};
