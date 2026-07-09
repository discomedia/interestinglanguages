import type { CollectionConfig, Field } from "payload";
import { triggerNetlifyBuildHook } from "../lib/publish-hook";

const jsonField = (name: string, label: string, required = true): Field => ({
  name,
  type: "json",
  label,
  required,
  admin: {
    description: "Structured JSON matching packages/content guide types. Seed scripts fill this automatically."
  }
});

export const LanguageGuides: CollectionConfig = {
  slug: "language-guides",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug", "family", "macroRegion", "difficultyLabel", "status", "updatedAt"]
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
          label: "Identity",
          fields: [
            { name: "family", type: "text", required: true },
            { name: "classification", type: "textarea", required: true },
            { name: "macroRegion", type: "text", required: true },
            { name: "primaryScript", type: "text", required: true },
            {
              name: "difficultyLabel",
              type: "select",
              required: true,
              options: ["Moderate", "Demanding", "Very demanding"].map((value) => ({ label: value, value }))
            },
            { name: "learnerHook", type: "textarea", required: true },
            { name: "speakerCommunity", type: "textarea", required: true },
            jsonField("factTable", "Compact fact table")
          ]
        },
        {
          label: "Guide",
          fields: [
            { name: "learnerOverviewRich", type: "textarea", required: true },
            jsonField("originNotes", "Origins and history"),
            jsonField("variantNotes", "Variants and registers"),
            jsonField("pronunciationGuide", "Pronunciation"),
            jsonField("writingSystem", "Writing system"),
            jsonField("grammarProfile", "Grammar"),
            jsonField("spokenProfile", "Where spoken"),
            jsonField("difficultyProfile", "Difficulty assessment"),
            jsonField("advancedLearning", "Advanced learning path"),
            jsonField("wordNotes", "Words and texts"),
            jsonField("relationshipNotes", "Related languages"),
            { name: "culturalNotesRich", type: "textarea" }
          ]
        },
        {
          label: "Resources",
          fields: [
            jsonField("resourceList", "Learning resources"),
            jsonField("phrasebook", "Phrases"),
            jsonField("sourceList", "Sources")
          ]
        },
        {
          label: "Media & SEO",
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
