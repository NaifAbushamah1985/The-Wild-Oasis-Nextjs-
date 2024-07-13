/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://the-wild-oasis-nextjs-umber.vercel.app", // Change to your domain
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  changefreq: "always",
  priority: 0.7,
};

module.exports = config;
