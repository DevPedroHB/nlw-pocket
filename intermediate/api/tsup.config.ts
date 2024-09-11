import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["drizzle", "src"],
	outDir: "dist",
	loader: {
		".sql": "copy",
	},
});
