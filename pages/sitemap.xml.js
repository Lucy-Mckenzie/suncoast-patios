const URL = 'https://suncoast-patios-4ecd1fa1b515.herokuapp.com'

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${URL}</loc>
     </url>
     <url>
       <loc>${URL}/contact</loc>
     </url>
        <url>
       <loc>${URL}/products/louvres</loc>
     </url>
        <url>
       <loc>${URL}/products/patios</loc>
     </url>
        <url>
       <loc>${URL}/products/blinds</loc>
     </url>
   </urlset>
 `
}

export default function SiteMap() {

}

export async function getServerSideProps({ res }) {

  const sitemap = generateSiteMap()

  res.setHeader('Content-Type', 'text/xml')

  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}
