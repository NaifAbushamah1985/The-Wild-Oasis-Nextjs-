// pages/api/sitemap.js

import { SitemapStream, streamToPromise } from "sitemap";
import { createGzip } from "zlib";
import { PassThrough } from "stream";

export default async function handler(req, res) {
  try {
    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Content-Encoding", "gzip");

    const sitemapStream = new SitemapStream({
      hostname: "https://example.com",
    });
    const gzip = createGzip();
    const pipeline = sitemapStream.pipe(gzip);

    // Pipe the sitemap stream to the response
    pipeline.pipe(res);

    // Example: Add static pages
    sitemapStream.write({ url: "/", changefreq: "daily", priority: 1.0 });
    sitemapStream.write({ url: "/about", changefreq: "weekly", priority: 0.8 });

    // Example: Add dynamic pages from database or API
    const dynamicPages = await fetchDynamicPagesFromDatabase(); // Implement your own logic
    dynamicPages.forEach((page) => {
      sitemapStream.write({
        url: `/dynamic/${page.slug}`,
        lastmod: page.updatedAt,
      });
    });

    // End the sitemap stream
    sitemapStream.end();
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
}

// Example function to fetch dynamic pages from a database
async function fetchDynamicPagesFromDatabase() {
  return [
    { slug: "page1", updatedAt: new Date().toISOString() },
    { slug: "page2", updatedAt: new Date().toISOString() },
    // Add more pages dynamically as needed
  ];
}

/*
import { getCabins } from "@/app/_lib/data-service";

const todayData = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

export default async function handler(req, res) {
  try {
    const sitemaps = [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemaps/homepage.xml`,
        changefreq: "daily",
        priority: "1.0",
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemaps/about.xml`,
        changefreq: "daily",
        priority: "1.0",
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemaps/cabins.xml`,
        changefreq: "daily",
        priority: "1.0",
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemaps/login.xml`,
        changefreq: "daily",
        priority: "1.0",
      },
    ];

    const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemaps
          .map(
            (page) => `
          <sitemap>
            <loc>${page.url}</loc>
            <lastmod>${todayData}</lastmod>
            <changefreq>${page.changefreq}</changefreq>
            <priority>${page.priority}</priority>
          </sitemap>
        `
          )
          .join("\n")}
      </sitemapindex>`;

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(sitemapXML);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Error generating sitemap");
  }
}
*/
