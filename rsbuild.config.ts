import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  environments: {
    web: {
      source: {
        entry: {
          popup: "./src/pages/popup",
          options: "./src/pages/options",
        },
      },
    },
    script: {
      source: {
        entry: {
          "content-script": "./src/pages/content-script",
          background: "./src/pages/background",
        },
      },
      output: {
        target: "web-worker",
        filenameHash: false,
      },
    },
  },

  performance: {
    chunkSplit: {
      strategy: "all-in-one",
    },
  },
  output: {
    distPath: {
      js: "",
    },
    copy: [
      {
        from: "src/config/manifest.json",
        to: "manifest.json",
      },
    ],
  },
});
