import { db, health } from "@/schema";
import { users } from "@/schema/auth";
import { count } from "drizzle-orm";
import { Hono } from "hono";

export const healthApp = new Hono()
	/**
	 * 疎通確認
	 * http://localhost:3100/api/health
	 */
	.get("/", (c) => {
		return c.json({ message: "app ok!" });
	})
	/**
	 * 疎通確認 + DB
	 * http://localhost:3100/api/app/health/count
	 */
	.get("/count", async (c) => {
		const result = await db.select({ count: count() }).from(users);
		return c.json({ count: result[0].count });
	})
	.get("/db", async (c) => {
		const result = await db.select({ envName: health.env_name }).from(health);
		console.log(result);
		return c.json({ envName: result[0] ? result[0].envName : "not found" });
	});
