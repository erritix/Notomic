import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    resolve: {
        alias: {
            "@": new URL("./src", import.meta.url).pathname,
            "#wails": new URL("./wailsjs", import.meta.url).pathname,
            "#rt": new URL("./wailsjs/runtime/runtime", import.meta.url).pathname,
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                includePaths: ["src/styles"],
                api: "modern-compiler",
                loadPaths: ["./vendor/pole/sass"],
            },
        },
    },
});
