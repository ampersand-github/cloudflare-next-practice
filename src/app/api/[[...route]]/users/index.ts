import { Hono } from "hono";

export const userApp = new Hono()
	.post("/", (c) => {
		return c.json({
			message: "young man is 20 years old",
		});
	})
	.get("/", (c) => {
		return c.json({
			message: "aaa",
		});
	});
