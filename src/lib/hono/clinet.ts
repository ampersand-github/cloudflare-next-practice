import type { AppType } from "@/app/api/[[...route]]/route";
import { hc } from "hono/client";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
export const client = hc<AppType>(process.env.NEXTAUTH_URL!);
