import { MigrateDownArgs, MigrateUpArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "family" varchar;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "classification" varchar;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "macro_region" varchar;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "primary_script" varchar;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "difficulty_label" varchar;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "learner_hook" varchar;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "speaker_community" varchar;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "fact_table" jsonb;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "learner_overview_rich" varchar;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "origin_notes" jsonb;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "variant_notes" jsonb;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "pronunciation_guide" jsonb;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "writing_system" jsonb;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "grammar_profile" jsonb;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "spoken_profile" jsonb;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "difficulty_profile" jsonb;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "advanced_learning" jsonb;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "word_notes" jsonb;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "relationship_notes" jsonb;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "cultural_notes_rich" varchar;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "resource_list" jsonb;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "phrasebook" jsonb;
    ALTER TABLE "language_guides" ADD COLUMN IF NOT EXISTS "source_list" jsonb;

    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_family" varchar;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_classification" varchar;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_macro_region" varchar;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_primary_script" varchar;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_difficulty_label" varchar;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_learner_hook" varchar;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_speaker_community" varchar;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_fact_table" jsonb;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_learner_overview_rich" varchar;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_origin_notes" jsonb;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_variant_notes" jsonb;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_pronunciation_guide" jsonb;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_writing_system" jsonb;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_grammar_profile" jsonb;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_spoken_profile" jsonb;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_difficulty_profile" jsonb;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_advanced_learning" jsonb;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_word_notes" jsonb;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_relationship_notes" jsonb;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_cultural_notes_rich" varchar;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_resource_list" jsonb;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_phrasebook" jsonb;
    ALTER TABLE "_language_guides_v" ADD COLUMN IF NOT EXISTS "version_source_list" jsonb;
  `);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_source_list";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_phrasebook";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_resource_list";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_cultural_notes_rich";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_relationship_notes";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_word_notes";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_advanced_learning";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_difficulty_profile";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_spoken_profile";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_grammar_profile";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_writing_system";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_pronunciation_guide";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_variant_notes";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_origin_notes";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_learner_overview_rich";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_fact_table";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_speaker_community";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_learner_hook";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_difficulty_label";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_primary_script";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_macro_region";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_classification";
    ALTER TABLE "_language_guides_v" DROP COLUMN IF EXISTS "version_family";

    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "source_list";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "phrasebook";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "resource_list";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "cultural_notes_rich";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "relationship_notes";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "word_notes";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "advanced_learning";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "difficulty_profile";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "spoken_profile";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "grammar_profile";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "writing_system";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "pronunciation_guide";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "variant_notes";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "origin_notes";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "learner_overview_rich";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "fact_table";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "speaker_community";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "learner_hook";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "difficulty_label";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "primary_script";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "macro_region";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "classification";
    ALTER TABLE "language_guides" DROP COLUMN IF EXISTS "family";
  `);
}
