import { resolve } from "node:path";

const resolveSrc = (k) => resolve(__dirname, "./src", k);

/** @type {import('vite').UserConfig} */
export default {
  resolve: {
    alias: {
      "@lib": resolveSrc("./lib"),
    },
  },

  define: { "process.env.NODE_ENV": '"production"' },

  build: {
    target: ["edge88", "firefox78", "chrome87", "safari14"],

    lib: {
      entry: {
        "lib/Component": resolveSrc("./lib/Component.ts"),
        "lib/StateComponent": resolveSrc("./lib/StateComponent.ts"),

        /* re-export nanostores */
        "e/nanostores": resolveSrc('./e/nanostores')
      },
      name: "peeker",
      formats: ["es"],

      fileName: (_, entryName) => `${entryName}.js`,
    },
  },
};
