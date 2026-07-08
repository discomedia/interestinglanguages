import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import { Media } from "./collections/Media";
import { LanguageGuides } from "./collections/LanguageGuides";
import { Users } from "./collections/Users";
import { normalizeGuide, normalizeGuideSummary } from "./lib/normalize-guide";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const databaseUrl = process.env.NEON_CONNECTION_STRING;

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " - Interesting Languages Admin"
    }
  },
  collections: [Users, Media, LanguageGuides],
  db: postgresAdapter({
    pool: {
      connectionString: databaseUrl
    }
  }),
  editor: lexicalEditor({}),
  endpoints: [
    {
      path: "/health",
      method: "get",
      handler: async () =>
        Response.json({
          ok: true,
          service: "interesting-languages-admin"
        })
    },
    {
      path: "/public/language-guides",
      method: "get",
      handler: async (req) => {
        const result = await req.payload.find({
          collection: "language-guides",
          depth: 2,
          limit: 100,
          overrideAccess: true,
          sort: "name",
          where: {
            status: {
              equals: "published"
            }
          }
        });

        return Response.json({
          docs: result.docs.map(normalizeGuideSummary)
        });
      }
    },
    {
      path: "/public/language-guides/:slug",
      method: "get",
      handler: async (req) => {
        const slug = req.routeParams?.slug;

        if (!slug || typeof slug !== "string") {
          return Response.json({ error: "Missing slug." }, { status: 400 });
        }

        const result = await req.payload.find({
          collection: "language-guides",
          depth: 2,
          limit: 1,
          overrideAccess: true,
          where: {
            and: [
              {
                status: {
                  equals: "published"
                }
              },
              {
                slug: {
                  equals: slug
                }
              }
            ]
          }
        });

        const doc = result.docs[0];

        if (!doc) {
          return Response.json({ error: "Guide not found." }, { status: 404 });
        }

        return Response.json({
          doc: normalizeGuide(doc)
        });
      }
    }
  ],
  secret: process.env.PAYLOAD_SECRET ?? "local-development-payload-secret",
  serverURL: process.env.PAYLOAD_ADMIN_URL ?? "http://localhost:3082",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts")
  }
});
