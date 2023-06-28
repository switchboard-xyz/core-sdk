// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  gettingStartedSidebar: [
    "about",
    "network",
    "data-models",
    "oracle-program",
    "attestation-program",
    "build",
    { type: "html", value: '<hr class="sidebar-separator">' },
    "data-feeds",
    "randomness",
    "secrets",
    "functions",
    { type: "html", value: '<hr class="sidebar-separator">' },
    {
      type: "category",
      collapsed: true,
      collapsible: false,
      label: "More Info",
      items: ["terminology", "what-are-tees"],
    },
    // {
    //   type: "category",
    //   collapsed: true,
    //   collapsible: false,
    //   label: "Products",
    //   link: { type: "doc", id: "products" },
    //   items: ["data-feeds", "randomness", "secrets", "functions"],
    // },
    // { type: "html", value: '<hr class="sidebar-separator">' },
    // {
    //   type: "category",
    //   collapsed: true,
    //   collapsible: false,
    //   label: "The Oracle Program",
    //   link: { type: "doc", id: "oracle-program" },
    //   items: ["data-feeds", "randomness"],
    // },
    // { type: "html", value: '<hr class="sidebar-separator">' },
    // {
    //   type: "category",
    //   collapsed: true,
    //   collapsible: false,
    //   label: "The Attestation Program",
    //   link: { type: "doc", id: "attestation-program" },
    //   items: ["secrets", "functions"],
    // },
    // {
    //   type: "category",
    //   label: "Products",
    //   link: {
    //     type: "doc",
    //     id: "products",
    //   },
    //   collapsible: false,
    //   items: [{ type: "autogenerated", dirName: "products" }],
    // },
    // { type: "html", value: '<hr class="sidebar-separator">' },
    // {
    //   type: "html",
    //   value:
    //     '<h3 class="sidebar__custom_label sidebar__category_label">Architecture</h3>',
    // },
    // { type: "autogenerated", dirName: "arch" },
  ],

  // productsSidebar: ["products", { type: "autogenerated", dirName: "products" }],

  guidesSidebar: [
    "guides",
    { type: "html", value: '<hr class="sidebar-separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">General</h3>',
    },
    { type: "autogenerated", dirName: "guides/feeds" },
    { type: "autogenerated", dirName: "guides/oracles" },
    { type: "html", value: '<hr class="sidebar-separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Solana</h3>',
    },
    {
      type: "ref",
      id: "solana/guides/feeds/index",
      className: "sidebar__external",
    },
    {
      type: "ref",
      id: "solana/guides/vrf/index",
      className: "sidebar__external",
    },
    {
      type: "ref",
      id: "solana/guides/test-integration",
      className: "sidebar__external",
    },
  ],

  aptosSidebar: [
    { type: "doc", id: "aptos/index", className: "sidebar__aptos" },
    { type: "autogenerated", dirName: "aptos/sdk" },
    { type: "html", value: '<hr class="sidebar-separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Guides</h3>',
    },
    { type: "autogenerated", dirName: "aptos/guides" },
  ],

  arbitrumSidebar: [
    { type: "doc", id: "arbitrum/index", className: "sidebar__arbitrum" },
    { type: "autogenerated", dirName: "arbitrum/sdk" },
    { type: "html", value: '<hr class="sidebar-separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Guides</h3>',
    },
    { type: "autogenerated", dirName: "arbitrum/guides" },
  ],

  coreDaoSidebar: [
    { type: "doc", id: "coredao/index", className: "sidebar__coredao" },
    { type: "autogenerated", dirName: "coredao/sdk" },
    { type: "html", value: '<hr class="sidebar-separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Guides</h3>',
    },
    { type: "autogenerated", dirName: "coredao/guides" },
  ],
  nearSidebar: [
    { type: "doc", id: "near/index", className: "sidebar__near" },
    { type: "autogenerated", dirName: "near/sdk" },
    { type: "html", value: '<hr class="sidebar-separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Guides</h3>',
    },
    { type: "autogenerated", dirName: "near/guides" },
  ],
  solanaSidebar: [
    { type: "doc", id: "solana/index", className: "sidebar__solana" },
    { type: "autogenerated", dirName: "solana/sdk" },
    { type: "html", value: '<hr class="sidebar-separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Guides</h3>',
      //   // type: "category",
      //   // collapsible: false,
      //   // label: "Guides",
      //   // link: {
      //   //   type: "generated-index",
      //   //   title: "Guides",
      //   //   description:
      //   //     "Guides and walkthroughs to integrate Switchboard on Solana",
      //   //   slug: "/solana/guides",
      //   //   keywords: ["guides"],
      //   // },

      //   // items: [{ type: "autogenerated", dirName: "solana/guides" }],
    },
    { type: "autogenerated", dirName: "solana/guides" },
  ],
  suiSidebar: [
    { type: "doc", id: "sui/index", className: "sidebar__sui" },
    { type: "autogenerated", dirName: "sui/sdk" },
    { type: "html", value: '<hr class="sidebar-separator">' },
    {
      type: "html",
      value:
        '<h3 class="sidebar__custom_label sidebar__category_label">Guides</h3>',
    },
    { type: "autogenerated", dirName: "sui/guides" },
  ],
};

module.exports = sidebars;
