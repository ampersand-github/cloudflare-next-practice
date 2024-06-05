import { Hono } from "hono";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";
import { healthApp } from "./health";
import { userApp } from "./users";

export const runtime = "edge";

/**
 * Bindings
 */
type Bindings = {
	DB: D1Database;
};

/**
 * app
 */
const app = new Hono<{ Bindings: Bindings }>()
	.basePath("/api")
	.route("/health", healthApp)
	.route("/users", userApp)
	.use("*", logger());

/**
 * RPC
 * https://hono.dev/snippets/grouping-routes-rpc
 * cChained routeじゃないと認識してくれなさそう
 */
export type AppType = typeof app;

export const GET = handle(app);
export const POST = handle(app);
