import { context } from "esbuild";

const ctx = await context({
	outbase: "src",
	format: "esm",
	target: ["chrome60"],
	entryPoints: ["./src/index.tsx"],
	outdir: "www",
	write: false,
	bundle: true,
	define: {
		"process.env.NODE_ENV": '"development"',
	},
	sourcemap: "linked",
	metafile: false,
	minify: true,
	logLevel: "info",
});

await ctx.watch();
await ctx.serve({ servedir: "www" });
