import { BuildOptions } from "esbuild";
import * as paths from "./paths";
import pkg from "../../package.json";

const isDevelopment = process.env.NODE_ENV === "development";

const external = Object.keys(pkg.dependencies);

export const esbuildOption: BuildOptions & { incremental: true } = {
    entryPoints: [paths.entryFile],
    bundle: true,
    platform: "node",
    target: "node14",
    external: [...external, "electron"],
    define: {
        "process.env.NODE_ENV": isDevelopment ? "'development'" : "'production'",
    },
    sourcemap: true,
    incremental: true,
    outfile: paths.dist,
    watch: true,
    allowOverwrite: true,
};
//
// main().catch(console.error.bind(console));
