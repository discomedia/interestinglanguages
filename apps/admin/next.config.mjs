import { withPayload } from "@payloadcms/next/withPayload";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(dirname, "../..");

const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: repoRoot
  }
};

export default withPayload(nextConfig);
