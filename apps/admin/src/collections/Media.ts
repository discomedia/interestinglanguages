import path from "node:path";
import { fileURLToPath } from "node:url";
import type { CollectionConfig } from "payload";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultUploadDir = path.resolve(dirname, "../../media");

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true
  },
  upload: {
    staticDir: process.env.PAYLOAD_UPLOADS_DIR ?? defaultUploadDir,
    mimeTypes: ["image/*", "audio/*"]
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true
    }
  ]
};
