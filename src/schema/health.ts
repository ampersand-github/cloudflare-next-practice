import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const health = sqliteTable("health", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	env_name: text("env_name"),
});
