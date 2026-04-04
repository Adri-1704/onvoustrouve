"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@/sanity/schemas";
import { sanityConfig } from "@/sanity/config";

export default defineConfig({
  name: "onvoustrouve-studio",
  title: "OnVousTrouve - Studio",
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  basePath: "/studio",
});
