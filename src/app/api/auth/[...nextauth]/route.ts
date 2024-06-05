import { handlers } from "@/lib/auth";
export const { GET, POST } = handlers;

export const runtime = "edge";

// http://localhost:3100/api/auth/signin
// http://localhost:3100/api/auth/signout
