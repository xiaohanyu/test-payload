import type { CollectionConfig } from "payload/types";

const Resumes: CollectionConfig = {
  slug: "resumes",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["id", "title", "createdAt", "updatedAt"],
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      unique: true,
      minLength: 2,
      maxLength: 64,
    },
  ],
};

export default Resumes;
