import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteVitrine",
  title: "Site Vitrine",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nom de l'entreprise",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL du site",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metier",
      title: "Type de métier",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description de l'entreprise",
      type: "text",
    }),
    defineField({
      name: "phone",
      title: "Téléphone",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Adresse",
      type: "string",
    }),
    defineField({
      name: "city",
      title: "Ville",
      type: "string",
    }),
    defineField({
      name: "heroTitle",
      title: "Titre principal du hero",
      type: "string",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Sous-titre du hero",
      type: "text",
    }),
    defineField({
      name: "colorPrimary",
      title: "Couleur principale (hex)",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/^#[0-9A-Fa-f]{6}$/).error(
          "Doit être un code couleur hex valide (ex: #FF5733)"
        ),
    }),
    defineField({
      name: "colorSecondary",
      title: "Couleur secondaire (hex)",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/^#[0-9A-Fa-f]{6}$/).error(
          "Doit être un code couleur hex valide (ex: #33A1FF)"
        ),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "heroImage",
      title: "Image du hero",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Nom du service",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
            defineField({
              name: "price",
              title: "Prix",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "horaires",
      title: "Horaires",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "jour",
              title: "Jour",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "ouverture",
              title: "Ouverture",
              type: "string",
            }),
            defineField({
              name: "fermeture",
              title: "Fermeture",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "testimonials",
      title: "Témoignages",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Nom",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "text",
              title: "Témoignage",
              type: "text",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "rating",
              title: "Note (1-5)",
              type: "number",
              validation: (Rule) => Rule.min(1).max(5),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "galleryImages",
      title: "Galerie photos",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Liens réseaux sociaux",
      type: "object",
      fields: [
        defineField({
          name: "facebook",
          title: "Facebook",
          type: "string",
        }),
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "string",
        }),
        defineField({
          name: "linkedin",
          title: "LinkedIn",
          type: "string",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "metier",
      media: "logo",
    },
  },
});
