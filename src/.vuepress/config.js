module.exports = {
  title: "Hoangpn Blog",
  titleIcon: "/favicon.ico",
  description: "💥The simple personal blog create by hoangpn",
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
  markdown: {
    lineNumbers: true,
  },
  theme: "blog-vuetify",
  themeConfig: {
    directories: [
      {
        id: "post",
        dirname: "_posts",
        path: "/",
        itemPermalink: "/post/:slug",
        frontmatter: {
          home: true,
        },
      },
    ],

    globalPagination: {
      lengthPerPage: 5,
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
      facebook: "https://facebook.com/mrhoangpn/",
      feed: "",
    },

    sitemap: true,

    feed: {
      rss: true,
      atom: false,
      json: false,
    },

    ga: "UA-190755179-1",

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
