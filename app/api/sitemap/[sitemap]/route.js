// app/api/sitemap/sitemap.js

export async function GET(req, { params }) {
  // console.log(req);
  console.log(params);

  return Response.json({ sitemap: "sitemap" });
}

/*
import { getCabins } from "@/app/_lib/data-service";

// Function to generate the main sitemap
async function generateMainSitemap() {
  const cabins = await getCabins();
  const sitemap = [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/cabins`,
      lastModified:
        cabins.length > 0
          ? cabins[cabins.length - 1].created_at
          : new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
      lastModified: new Date().toISOString(),
    },
  ];

  return sitemap;
}

// Function to generate cabins sitemap
async function generateCabinsSitemap(id) {
  const cabins = await getCabins();
  const start = id * 50000;
  const end = start + 50000;
  const slicedCabins = cabins.slice(start, end);

  return slicedCabins.map((cabin) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/cabins/${cabin.id}`,
    lastModified: cabin.created_at,
  }));
}

// Function to generate sitemaps
export async function generateSitemaps() {
  const cabins = await getCabins();
  const mainSitemap = await generateMainSitemap();
  const numSitemaps = Math.ceil(cabins.length / 50000);

  const sitemaps = [];
  for (let i = 0; i < numSitemaps; i++) {
    const cabinsSitemap = await generateCabinsSitemap(i);
    sitemaps.push({ id: i + 2, name: `cabins-${i + 1}`, urls: cabinsSitemap });
  }

  return [{ id: 1, name: "main", urls: mainSitemap }, ...sitemaps];
}

// Default export for the sitemap function
export default async function sitemap({ params }) {
  const id = params.id ? parseInt(params.id, 10) : 1;
  const sitemaps = await generateSitemaps();
  const selectedSitemap = sitemaps.find((sitemap) => sitemap.id === id);

  if (!selectedSitemap) {
    return { notFound: true };
  }

  const xml = selectedSitemap.urls
    .map(
      (url) =>
        `<url><loc>${url.url}</loc><lastmod>${url.lastModified}</lastmod></url>`
    )
    .join("");

  return {
    headers: { "Content-Type": "text/xml" },
    body: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xml}\n</urlset>`,
  };
}
*/
