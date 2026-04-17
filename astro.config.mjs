// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import path from "node:path";

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.local(),
        name: "Montserrat",
        cssVariable: "--font-montserrat",
        options: {
            variants: [{
                src: ["./src/assets/fonts/Montserrat-VariableFont_wght.ttf"],
                weight: "100 900",
                style: "normal"
            }]
        }
    }],
    integrations: [
        icon(),
        mdx(),
        react(),
        sitemap(),
    ],
    image: {
        // Used for all Markdown images; not configurable per-image
        responsiveStyles: true,
        // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
        layout: "constrained",
    },
    markdown: {
        shikiConfig: {
            themes: {
                light: "vitesse-light",
                dark: "vitesse-dark",
            },
        },
    },
    site: "https://elliotreed.dev",
    trailingSlash: "always",
    vite: {
        resolve: {
            alias: {
                "~": path.resolve(import.meta.dirname, "src"),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    loadPaths: [path.resolve("./src/styles")]
                },
            }
        },
        server: {
            // allowedHosts: ["backtalk.local"],
            // These settings don"t matter, the npm dev script sets these values via flags
            // host: "backtalk.local",
            // port: 5001,
        },
    },
});
