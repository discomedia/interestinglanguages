import type { ReactNode } from "react";
import configPromise from "@payload-config";
import { handleServerFunctions, RootLayout as PayloadRootLayout } from "@payloadcms/next/layouts";
import { importMap } from "../importMap";
import "@payloadcms/next/css";

export { metadata } from "@payloadcms/next/layouts";

const serverFunction = async (args: Parameters<typeof handleServerFunctions>[0] extends infer HandlerArgs
  ? Omit<HandlerArgs, "config" | "importMap">
  : never) => {
  "use server";

  return handleServerFunctions({
    ...args,
    config: configPromise,
    importMap
  });
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <PayloadRootLayout config={configPromise} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </PayloadRootLayout>
  );
}
