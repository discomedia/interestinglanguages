import type { CollectionConfig } from "payload";
import { triggerNetlifyBuildHook } from "../lib/publish-hook";

const resourceTypes = [
  "course",
  "video",
  "app",
  "book",
  "dictionary",
  "podcast",
  "community",
  "other"
];

export const LanguageGuides: CollectionConfig = {
  slug: "language-guides",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug", "status", "publishedAt", "updatedAt"]
  },
  versions: {
    drafts: true,
    maxPerDoc: 20
  },
  access: {
    read: ({ req }) => {
      if (req.user) {
        return true;
      }

      return {
        status: {
          equals: "published"
        }
      };
    }
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.status === "published" && !data.publishedAt) {
          data.publishedAt = new Date().toISOString();
        }

        return data;
      }
    ],
    afterChange: [
      async ({ doc, operation, previousDoc }) => {
        if (doc.status === "published" && previousDoc?.status !== "published") {
          await triggerNetlifyBuildHook({ slug: doc.slug, operation });
        }
      }
    ]
  },
  fields: [
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" }
      ]
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime"
        }
      }
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true
    },
    {
      name: "name",
      type: "text",
      required: true
    },
    {
      name: "autonym",
      type: "text"
    },
    {
      name: "summary",
      type: "textarea",
      required: true
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [
            {
              name: "heroImage",
              type: "upload",
              relationTo: "media"
            },
            {
              name: "heroImageAlt",
              type: "text"
            },
            {
              name: "heroCallToActionLabel",
              type: "text"
            }
          ]
        },
        {
          label: "Guide",
          fields: [
            {
              name: "learnerOverview",
              type: "textarea",
              required: true
            },
            {
              name: "pronunciationOverview",
              type: "textarea",
              required: true
            },
            {
              name: "script",
              type: "text",
              required: true
            },
            {
              name: "vowels",
              type: "text",
              required: true
            },
            {
              name: "consonants",
              type: "textarea",
              required: true
            },
            {
              name: "sampleWord",
              type: "text",
              required: true
            },
            {
              name: "sampleWordTransliteration",
              type: "text"
            },
            {
              name: "sampleWordTranslation",
              type: "text",
              required: true
            },
            {
              name: "grammarOverview",
              type: "textarea",
              required: true
            },
            {
              name: "grammarTopics",
              type: "array",
              required: true,
              minRows: 3,
              fields: [
                { name: "title", type: "text", required: true },
                { name: "body", type: "textarea", required: true },
                { name: "example", type: "text" },
                { name: "exampleTranslation", type: "text" }
              ]
            },
            {
              name: "whereSpokenOverview",
              type: "textarea",
              required: true
            },
            {
              name: "spokenRegions",
              type: "array",
              required: true,
              minRows: 2,
              fields: [
                { name: "place", type: "text", required: true },
                { name: "note", type: "text", required: true }
              ]
            },
            {
              name: "mapImage",
              type: "upload",
              relationTo: "media"
            },
            {
              name: "mapImageAlt",
              type: "text"
            },
            {
              name: "learningDifficulty",
              type: "textarea",
              required: true
            },
            {
              name: "culturalNotes",
              type: "textarea"
            }
          ]
        },
        {
          label: "Resources",
          fields: [
            {
              name: "resources",
              type: "array",
              required: true,
              minRows: 3,
              fields: [
                { name: "type", type: "select", required: true, options: resourceTypes.map((value) => ({ label: value, value })) },
                { name: "title", type: "text", required: true },
                { name: "url", type: "text" },
                {
                  name: "level",
                  type: "select",
                  defaultValue: "all",
                  options: ["beginner", "intermediate", "advanced", "all"].map((value) => ({ label: value, value }))
                },
                { name: "description", type: "textarea", required: true }
              ]
            },
            {
              name: "relatedLanguages",
              type: "array",
              required: true,
              minRows: 2,
              fields: [
                { name: "name", type: "text", required: true },
                { name: "slug", type: "text" },
                { name: "relationship", type: "text", required: true },
                { name: "explanation", type: "textarea", required: true }
              ]
            }
          ]
        },
        {
          label: "Phrases",
          fields: [
            {
              name: "phrases",
              type: "array",
              required: true,
              minRows: 8,
              fields: [
                { name: "original", type: "text", required: true },
                { name: "transliteration", type: "text" },
                { name: "translation", type: "text", required: true },
                { name: "literalMeaning", type: "text" },
                { name: "usageNote", type: "text" }
              ]
            }
          ]
        },
        {
          label: "Sources & SEO",
          fields: [
            {
              name: "sources",
              type: "array",
              required: true,
              minRows: 2,
              fields: [
                { name: "title", type: "text", required: true },
                { name: "url", type: "text" },
                { name: "publisher", type: "text" },
                { name: "accessedAt", type: "date" }
              ]
            },
            {
              name: "seoTitle",
              type: "text",
              required: true
            },
            {
              name: "seoDescription",
              type: "textarea",
              required: true
            },
            {
              name: "socialImage",
              type: "upload",
              relationTo: "media"
            }
          ]
        }
      ]
    }
  ]
};
