import Link from "next/link";
import SitemapGenerator from "../_compopents/SitemapGenerator";

function SEOPage() {
  return (
    <div className="bg-white h-screen">
      <div className=" px-4 py-2 rounded-md text-center">
        <SitemapGenerator />
        <Link href="/sitemaps.xml">
          <button className="bg-yellow-300 text-md font-semibold px-4 py-2 rounded-md text-black text-center hover:bg-green-300 mt-5">
            View Sitemap
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SEOPage;
