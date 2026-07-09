import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_language_guides_resources_type" AS ENUM('course', 'video', 'app', 'book', 'dictionary', 'podcast', 'community', 'other');
  CREATE TYPE "public"."enum_language_guides_resources_level" AS ENUM('beginner', 'intermediate', 'advanced', 'all');
  CREATE TYPE "public"."enum_language_guides_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__language_guides_v_version_resources_type" AS ENUM('course', 'video', 'app', 'book', 'dictionary', 'podcast', 'community', 'other');
  CREATE TYPE "public"."enum__language_guides_v_version_resources_level" AS ENUM('beginner', 'intermediate', 'advanced', 'all');
  CREATE TYPE "public"."enum__language_guides_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "language_guides_grammar_topics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar,
  	"example" varchar,
  	"example_translation" varchar
  );
  
  CREATE TABLE "language_guides_spoken_regions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"place" varchar,
  	"note" varchar
  );
  
  CREATE TABLE "language_guides_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_language_guides_resources_type",
  	"title" varchar,
  	"url" varchar,
  	"level" "enum_language_guides_resources_level" DEFAULT 'all',
  	"description" varchar
  );
  
  CREATE TABLE "language_guides_related_languages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"slug" varchar,
  	"relationship" varchar,
  	"explanation" varchar
  );
  
  CREATE TABLE "language_guides_phrases" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"original" varchar,
  	"transliteration" varchar,
  	"translation" varchar,
  	"literal_meaning" varchar,
  	"usage_note" varchar
  );
  
  CREATE TABLE "language_guides_sources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"url" varchar,
  	"publisher" varchar,
  	"accessed_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "language_guides" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"status" "enum_language_guides_status" DEFAULT 'draft',
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"name" varchar,
  	"autonym" varchar,
  	"summary" varchar,
  	"hero_image_id" integer,
  	"hero_image_alt" varchar,
  	"hero_call_to_action_label" varchar,
  	"learner_overview" varchar,
  	"pronunciation_overview" varchar,
  	"script" varchar,
  	"vowels" varchar,
  	"consonants" varchar,
  	"sample_word" varchar,
  	"sample_word_transliteration" varchar,
  	"sample_word_translation" varchar,
  	"grammar_overview" varchar,
  	"where_spoken_overview" varchar,
  	"map_image_id" integer,
  	"map_image_alt" varchar,
  	"learning_difficulty" varchar,
  	"cultural_notes" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"social_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_language_guides_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_language_guides_v_version_grammar_topics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" varchar,
  	"example" varchar,
  	"example_translation" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_language_guides_v_version_spoken_regions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"place" varchar,
  	"note" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_language_guides_v_version_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__language_guides_v_version_resources_type",
  	"title" varchar,
  	"url" varchar,
  	"level" "enum__language_guides_v_version_resources_level" DEFAULT 'all',
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_language_guides_v_version_related_languages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"slug" varchar,
  	"relationship" varchar,
  	"explanation" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_language_guides_v_version_phrases" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"original" varchar,
  	"transliteration" varchar,
  	"translation" varchar,
  	"literal_meaning" varchar,
  	"usage_note" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_language_guides_v_version_sources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"url" varchar,
  	"publisher" varchar,
  	"accessed_at" timestamp(3) with time zone,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_language_guides_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_status" "enum__language_guides_v_version_status" DEFAULT 'draft',
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_name" varchar,
  	"version_autonym" varchar,
  	"version_summary" varchar,
  	"version_hero_image_id" integer,
  	"version_hero_image_alt" varchar,
  	"version_hero_call_to_action_label" varchar,
  	"version_learner_overview" varchar,
  	"version_pronunciation_overview" varchar,
  	"version_script" varchar,
  	"version_vowels" varchar,
  	"version_consonants" varchar,
  	"version_sample_word" varchar,
  	"version_sample_word_transliteration" varchar,
  	"version_sample_word_translation" varchar,
  	"version_grammar_overview" varchar,
  	"version_where_spoken_overview" varchar,
  	"version_map_image_id" integer,
  	"version_map_image_alt" varchar,
  	"version_learning_difficulty" varchar,
  	"version_cultural_notes" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_social_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__language_guides_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"language_guides_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "language_guides_grammar_topics" ADD CONSTRAINT "language_guides_grammar_topics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."language_guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "language_guides_spoken_regions" ADD CONSTRAINT "language_guides_spoken_regions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."language_guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "language_guides_resources" ADD CONSTRAINT "language_guides_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."language_guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "language_guides_related_languages" ADD CONSTRAINT "language_guides_related_languages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."language_guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "language_guides_phrases" ADD CONSTRAINT "language_guides_phrases_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."language_guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "language_guides_sources" ADD CONSTRAINT "language_guides_sources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."language_guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "language_guides" ADD CONSTRAINT "language_guides_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "language_guides" ADD CONSTRAINT "language_guides_map_image_id_media_id_fk" FOREIGN KEY ("map_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "language_guides" ADD CONSTRAINT "language_guides_social_image_id_media_id_fk" FOREIGN KEY ("social_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_language_guides_v_version_grammar_topics" ADD CONSTRAINT "_language_guides_v_version_grammar_topics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_language_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_language_guides_v_version_spoken_regions" ADD CONSTRAINT "_language_guides_v_version_spoken_regions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_language_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_language_guides_v_version_resources" ADD CONSTRAINT "_language_guides_v_version_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_language_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_language_guides_v_version_related_languages" ADD CONSTRAINT "_language_guides_v_version_related_languages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_language_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_language_guides_v_version_phrases" ADD CONSTRAINT "_language_guides_v_version_phrases_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_language_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_language_guides_v_version_sources" ADD CONSTRAINT "_language_guides_v_version_sources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_language_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_language_guides_v" ADD CONSTRAINT "_language_guides_v_parent_id_language_guides_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."language_guides"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_language_guides_v" ADD CONSTRAINT "_language_guides_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_language_guides_v" ADD CONSTRAINT "_language_guides_v_version_map_image_id_media_id_fk" FOREIGN KEY ("version_map_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_language_guides_v" ADD CONSTRAINT "_language_guides_v_version_social_image_id_media_id_fk" FOREIGN KEY ("version_social_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_language_guides_fk" FOREIGN KEY ("language_guides_id") REFERENCES "public"."language_guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "language_guides_grammar_topics_order_idx" ON "language_guides_grammar_topics" USING btree ("_order");
  CREATE INDEX "language_guides_grammar_topics_parent_id_idx" ON "language_guides_grammar_topics" USING btree ("_parent_id");
  CREATE INDEX "language_guides_spoken_regions_order_idx" ON "language_guides_spoken_regions" USING btree ("_order");
  CREATE INDEX "language_guides_spoken_regions_parent_id_idx" ON "language_guides_spoken_regions" USING btree ("_parent_id");
  CREATE INDEX "language_guides_resources_order_idx" ON "language_guides_resources" USING btree ("_order");
  CREATE INDEX "language_guides_resources_parent_id_idx" ON "language_guides_resources" USING btree ("_parent_id");
  CREATE INDEX "language_guides_related_languages_order_idx" ON "language_guides_related_languages" USING btree ("_order");
  CREATE INDEX "language_guides_related_languages_parent_id_idx" ON "language_guides_related_languages" USING btree ("_parent_id");
  CREATE INDEX "language_guides_phrases_order_idx" ON "language_guides_phrases" USING btree ("_order");
  CREATE INDEX "language_guides_phrases_parent_id_idx" ON "language_guides_phrases" USING btree ("_parent_id");
  CREATE INDEX "language_guides_sources_order_idx" ON "language_guides_sources" USING btree ("_order");
  CREATE INDEX "language_guides_sources_parent_id_idx" ON "language_guides_sources" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "language_guides_slug_idx" ON "language_guides" USING btree ("slug");
  CREATE INDEX "language_guides_hero_image_idx" ON "language_guides" USING btree ("hero_image_id");
  CREATE INDEX "language_guides_map_image_idx" ON "language_guides" USING btree ("map_image_id");
  CREATE INDEX "language_guides_social_image_idx" ON "language_guides" USING btree ("social_image_id");
  CREATE INDEX "language_guides_updated_at_idx" ON "language_guides" USING btree ("updated_at");
  CREATE INDEX "language_guides_created_at_idx" ON "language_guides" USING btree ("created_at");
  CREATE INDEX "language_guides__status_idx" ON "language_guides" USING btree ("_status");
  CREATE INDEX "_language_guides_v_version_grammar_topics_order_idx" ON "_language_guides_v_version_grammar_topics" USING btree ("_order");
  CREATE INDEX "_language_guides_v_version_grammar_topics_parent_id_idx" ON "_language_guides_v_version_grammar_topics" USING btree ("_parent_id");
  CREATE INDEX "_language_guides_v_version_spoken_regions_order_idx" ON "_language_guides_v_version_spoken_regions" USING btree ("_order");
  CREATE INDEX "_language_guides_v_version_spoken_regions_parent_id_idx" ON "_language_guides_v_version_spoken_regions" USING btree ("_parent_id");
  CREATE INDEX "_language_guides_v_version_resources_order_idx" ON "_language_guides_v_version_resources" USING btree ("_order");
  CREATE INDEX "_language_guides_v_version_resources_parent_id_idx" ON "_language_guides_v_version_resources" USING btree ("_parent_id");
  CREATE INDEX "_language_guides_v_version_related_languages_order_idx" ON "_language_guides_v_version_related_languages" USING btree ("_order");
  CREATE INDEX "_language_guides_v_version_related_languages_parent_id_idx" ON "_language_guides_v_version_related_languages" USING btree ("_parent_id");
  CREATE INDEX "_language_guides_v_version_phrases_order_idx" ON "_language_guides_v_version_phrases" USING btree ("_order");
  CREATE INDEX "_language_guides_v_version_phrases_parent_id_idx" ON "_language_guides_v_version_phrases" USING btree ("_parent_id");
  CREATE INDEX "_language_guides_v_version_sources_order_idx" ON "_language_guides_v_version_sources" USING btree ("_order");
  CREATE INDEX "_language_guides_v_version_sources_parent_id_idx" ON "_language_guides_v_version_sources" USING btree ("_parent_id");
  CREATE INDEX "_language_guides_v_parent_idx" ON "_language_guides_v" USING btree ("parent_id");
  CREATE INDEX "_language_guides_v_version_version_slug_idx" ON "_language_guides_v" USING btree ("version_slug");
  CREATE INDEX "_language_guides_v_version_version_hero_image_idx" ON "_language_guides_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_language_guides_v_version_version_map_image_idx" ON "_language_guides_v" USING btree ("version_map_image_id");
  CREATE INDEX "_language_guides_v_version_version_social_image_idx" ON "_language_guides_v" USING btree ("version_social_image_id");
  CREATE INDEX "_language_guides_v_version_version_updated_at_idx" ON "_language_guides_v" USING btree ("version_updated_at");
  CREATE INDEX "_language_guides_v_version_version_created_at_idx" ON "_language_guides_v" USING btree ("version_created_at");
  CREATE INDEX "_language_guides_v_version_version__status_idx" ON "_language_guides_v" USING btree ("version__status");
  CREATE INDEX "_language_guides_v_created_at_idx" ON "_language_guides_v" USING btree ("created_at");
  CREATE INDEX "_language_guides_v_updated_at_idx" ON "_language_guides_v" USING btree ("updated_at");
  CREATE INDEX "_language_guides_v_latest_idx" ON "_language_guides_v" USING btree ("latest");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_language_guides_id_idx" ON "payload_locked_documents_rels" USING btree ("language_guides_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "language_guides_grammar_topics" CASCADE;
  DROP TABLE "language_guides_spoken_regions" CASCADE;
  DROP TABLE "language_guides_resources" CASCADE;
  DROP TABLE "language_guides_related_languages" CASCADE;
  DROP TABLE "language_guides_phrases" CASCADE;
  DROP TABLE "language_guides_sources" CASCADE;
  DROP TABLE "language_guides" CASCADE;
  DROP TABLE "_language_guides_v_version_grammar_topics" CASCADE;
  DROP TABLE "_language_guides_v_version_spoken_regions" CASCADE;
  DROP TABLE "_language_guides_v_version_resources" CASCADE;
  DROP TABLE "_language_guides_v_version_related_languages" CASCADE;
  DROP TABLE "_language_guides_v_version_phrases" CASCADE;
  DROP TABLE "_language_guides_v_version_sources" CASCADE;
  DROP TABLE "_language_guides_v" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_language_guides_resources_type";
  DROP TYPE "public"."enum_language_guides_resources_level";
  DROP TYPE "public"."enum_language_guides_status";
  DROP TYPE "public"."enum__language_guides_v_version_resources_type";
  DROP TYPE "public"."enum__language_guides_v_version_resources_level";
  DROP TYPE "public"."enum__language_guides_v_version_status";`)
}
