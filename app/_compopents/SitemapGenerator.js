import generateIndexSitemap, {
  generateAboutSitemap,
  generateHomepageSitemap,
  generateCabinsSitemap,
  generateLoginSitemap,
} from "../utils/generate-sitemap";

// export const revalidate = 0;

function SitemapGenerator() {
  return (
    <div className="flex space-x-6 mr-auto">
      <form action={generateIndexSitemap}>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Index Sitemap
        </button>
      </form>

      <form action={generateAboutSitemap}>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          About Sitemap
        </button>
      </form>

      <form action={generateHomepageSitemap}>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Homepage Sitemap
        </button>
      </form>

      <form action={generateCabinsSitemap}>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Cabins Sitemap
        </button>
      </form>

      <form action={generateLoginSitemap}>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Login Sitemap
        </button>
      </form>

      <form action="">
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          other Sitemap
        </button>
      </form>
    </div>
  );
}

export default SitemapGenerator;
