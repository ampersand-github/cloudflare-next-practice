import { defineConfig} from "drizzle-kit";

export default defineConfig({
    dialect: "sqlite",
    driver: "d1-http",
    schema: "./src/schema/index.ts",
    out: "./.drizzle/migrations",
    dbCredentials: {
        accountId: "5045ba6c2c80ad85ba4dac3cfecec3fd",
        databaseId:"b31fab65-4e05-4882-b33f-5b008041e9c3",
        token: "VchFboS4p3lzpFgwywcRw5e-fDMl7tAV2ytbnUxe"
    },
})
