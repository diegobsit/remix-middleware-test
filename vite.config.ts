import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { expressDevServer } from "remix-express-dev-server";
import { defineConfig } from "vite";
import { envOnlyMacros } from "vite-env-only";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

installGlobals({ nativeFetch: true });

export default defineConfig({
  plugins: [
    remix({
      future: {
        // v3_fetcherPersist: true,
        // v3_relativeSplatPath: true,
        // v3_throwAbortReason: true,
        v3_singleFetch: true,
        // v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
    expressDevServer(),
    envOnlyMacros(),
  ],
});
