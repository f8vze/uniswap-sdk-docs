module.exports = {
  title: "Uniswap",
  tagline: "SDK Documentation",
  url: "https://docs.sdk.uniswap.org/",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "Uniswap", // Usually your GitHub org/user name.
  projectName: "Uniswap-sdk-docs", // Usually your repo name.
  themeConfig: {
   // hideableSidebar: true,
    prism: {
      additionalLanguages: ["solidity"],
    },
    algolia: {
      apiKey: "32465e2ab6f7554ff014e64c0d92171c",
      indexName: "v3-sdk-docs",
      appId: "S0IDD0YGLZ"
    },
    navbar: {
      title: "Uniswap Documentation",
      logo: {
        alt: "Uniswap Unicorn",
        src: "img/uni_dark_icon.svg",
      },
      items: [
        {
          label: "Whitepaper",
          to: "https://uniswap.org/whitepaper-v3.pdf",
          position: "right",
        },
        {
          href: "https://github.com/uniswap/uniswap-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          includeCurrentVersion: true,
          editUrl: "https://github.com/uniswap/uniswap-sdk-docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
          "https://github.com/uniswap/uniswap-sdk-docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
          customCss2: require.resolve("./src/css/colors.css"),
        },
      },
    ],
  ],
  // plugins: [
  //   'docusaurus-plugin-typedoc',

  //     // Plugin / TypeDoc options
  //     {
  //       entryPoints: ['../src/index.ts'],
  //       tsconfig: '../tsconfig.json'
  //     },  
  //   ]
};
