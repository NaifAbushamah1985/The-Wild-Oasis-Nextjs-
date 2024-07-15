// app/utils/generate-sitemap.js
"use server";

import { getCabins } from "../_lib/data-service";
const fs = require("fs");
const path = require("path");

const todayData = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

export default async function generateIndexSitemap() {
  const sitemaps = [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemaps/homepage.xml`,
      changefreq: "daily",
      priority: "1.0",
    },
    // Add more pages as needed
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
  try {
    const filePath = path.resolve("./public/sitemaps.xml"); // Resolve path relative to project root
    fs.writeFileSync(filePath, sitemapXML); // Write sitemap to file
    // console.log("Sitemap generated successfully.");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

export async function generateAboutSitemap() {
  const sitemaps = [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastmod: `${todayData}`,
      changefreq: "weekly",
      priority: "0.8",
    },
    // Add more pages as needed
  ];

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemaps
        .map(
          (page) => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `
        )
        .join("\n")}
    </urlset>`;

  try {
    const filePath = path.resolve("./public/sitemaps/about.xml"); // Resolve path relative to project root
    fs.writeFileSync(filePath, sitemapXML); // Write sitemap to file
  } catch (error) {
    console.error("Error generating about sitemap:", error);
  }
}

export async function generateHomepageSitemap() {
  const sitemaps = [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastmod: `${todayData}`,
      changefreq: "weekly",
      priority: "0.8",
    },
    // Add more pages as needed
  ];

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemaps
        .map(
          (page) => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `
        )
        .join("\n")}
    </urlset>`;

  try {
    const filePath = path.resolve("./public/sitemaps/homepage.xml"); // Resolve path relative to project root
    fs.writeFileSync(filePath, sitemapXML); // Write sitemap to file
  } catch (error) {
    console.error("Error generating Homepage sitemap:", error);
  }
}

export async function generateLoginSitemap() {
  const sitemaps = [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/account`,
      lastmod: `${todayData}`,
      changefreq: "weekly",
      priority: "0.8",
    },
    // Add more pages as needed
  ];

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemaps
        .map(
          (page) => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `
        )
        .join("\n")}
    </urlset>`;

  try {
    const filePath = path.resolve("./public/sitemaps/login.xml"); // Resolve path relative to project root
    fs.writeFileSync(filePath, sitemapXML); // Write sitemap to file
  } catch (error) {
    console.error("Error generating Login sitemap:", error);
  }
}

export async function generateCabinsSitemap() {
  const cabins = await getCabins();

  const sitemaps = cabins.map((cabin) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/cabins/${cabin.id}`, // Assuming each cabin has a unique id
    lastmod: cabin.created_at.split("T")[0], // Use the cabin's created_at date as lastmod
    changefreq: "daily",
    priority: "0.8",
  }));

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemaps
        .map(
          (page) => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `
        )
        .join("\n")}
    </urlset>`;

  try {
    const filePath = path.resolve("./public/sitemaps/cabins.xml"); // Resolve path relative to project root
    fs.writeFileSync(filePath, sitemapXML); // Write sitemap to file
  } catch (error) {
    console.error("Error generating Cabins sitemap:", error);
  }
}
