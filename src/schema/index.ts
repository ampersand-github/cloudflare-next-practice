import { drizzle } from "drizzle-orm/d1";

export const db = drizzle((process.env as unknown as { DB: D1Database }).DB);

// ここにスキーマ情報を追加していく。そうしないとスキーマを認識してくれない
export * from "./health";
export * from "./auth";
