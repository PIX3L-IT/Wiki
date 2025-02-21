// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PIXEL.IT",
  tagline: "Soluciones creadas pixel a pixel",
  favicon: "img/favicon-pixelit.ico",

  // Set the production url of your site here
  url: "https://github.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/Wiki/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "PIX3L-IT", // Usually your GitHub org/user name.
  projectName: "Wiki", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/PIX3L-IT/Wiki/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "PIXEL.IT",
        logo: {
          alt: "Logo de PIXEL.IT",
          src: "img/pixelit-color-logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "procesosSidebar",
            position: "left",
            label: "Procesos",
          },
          {
            type: "docSidebar",
            sidebarId: "politicasSidebar",
            position: "left",
            label: "Políticas",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialesSidebar",
            position: "left",
            label: "Tutoriales",
          },
          {
            type: "docSidebar",
            sidebarId: "plantillasSidebar",
            position: "left",
            label: "Plantillas",
          },
          {
            type: "docSidebar",
            sidebarId: "estandaresSidebar",
            position: "left",
            label: "Estándares",
          },
          {
            type: "docSidebar",
            sidebarId: "eticaSidebar",
            position: "left",
            label: "Código de Ética",
          },
          {
            href: "https://drive.google.com/drive/folders/1yoYJSe2ne53PzQIaP8plXMehL3rZbWKq?usp=drive_link",
            label: "Drive",
            position: "right",
          },
          {
            href: "https://github.com/PIX3L-IT/Wiki",
            label: "Notion",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Nuestros links",
            items: [
              {
                label: "Drive",
                href: "https://drive.google.com/drive/folders/1yoYJSe2ne53PzQIaP8plXMehL3rZbWKq?usp=drive_link",
              },
              {
                label: "Discord",
                href: "https://discord.gg/avGvj3GGcr",
              },
              {
                label: "Notion",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Github Wiki",
                href: "https://github.com/PIX3L-IT/Wiki",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PIXEL.IT. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
