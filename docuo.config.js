const config = {
  title: "My Site",
  favicon: "image/favicon.ico",
  iconRedirectUrl: "https://www.spreading.ai",
  logo: "image/logo.png",
  instances: [
    {
      id: "default",
      label: "docs",
      path: "docs",
      routeBasePath: "docs",
    },
  ],
  themeConfig: {
    navbar: {
      title: "My Site",
      logo: "image/logo.png",
      items: [
        {
          type: "docSidebar",
          sidebarIds: ["mySidebar"],
          label: "NavItem",
          position: "left", // 'left' | 'right'
          docsInstanceId: "default",
        },
      ],
    },
    footer: {
      logo: "image/logo.png",
      copyright: "Copyright @2024 SPREADING. All Rights Reserved",
      caption: "",
      links: [],
      socials: [],
    },
  },
};

export default config;
