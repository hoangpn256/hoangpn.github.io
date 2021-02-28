module.exports = {
  title: "Hoangpn Blog",
  titleIcon: "/favicon.ico",
  description:
    "💥The simple personal blog create by hoangpn, theme by vuepress-blog-theme",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
    [
      "link",
      {
        rel: "touch-icon",
        href: "/touch-icon.png",
        type: "image/png",
      },
    ],
  ],
  nav: [
    { text: "Trang Chủ", link: "/" },
    { text: "Giới Thiệu", link: "/about/" },
    { text: "Ehkoo", link: "https://ehkoo.com" },
  ],
  markdown: {
    lineNumbers: true,
  },
  theme: "blog-vuetify",
  themeConfig: {
    globalPagination: {
      lengthPerPage: 3,
    },
    titleIcon: "pencil-box-outline",
    sidebar: {
      profile: {
        avatarUrl: "/avatar.jpg",
        name: "hoangpn",
        subTitle: "Rails Software Engineering",
        descriptionHtml:
          "Welcome to my blog. Mình là Hoàng, bạn có thể xem thêm về mình tại đây <a href='/about'> About me</a>",
      },
    },
    footer: {
      // insert link here
    },
    sns: {
      github: "https://github.com/hoangpn256/",
      feed: "",
    },
    sitemap: true,

    feed: {
      rss: true,
      atom: false,
      json: false,
    },
    seo: {
      baseUrl: "https://hoangpn.com/",
      author: "https://www.facebook.com/mrhoangpn",
      image: "/avatar.jpg",
      articleDirectoryNames: ["_posts", "_pages"],
    },
    summary: 300,
    dateFormat: "DD/MM/YYYY",
  },
  plugins: ["redirect-frontmatter"],
};
