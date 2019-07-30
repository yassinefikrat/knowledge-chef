const pkg = require("./package");

module.exports = {
  mode: "spa",
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Overpass:400,700"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Overpass+Mono:400,700"
      }
    ]
  },
  loading: { color: "#FFE5D9" },
};
