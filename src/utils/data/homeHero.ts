export default async function homeHero() {
  const res = await fetch(process.env.WORDPRESS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query homeHero {
          pages {
            nodes {
              acfHero {
                images {
                  id
                  mediaDetails {
                    height
                    width
                  }
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
      `
    })
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const json = await res.json(),
    data = json.data.pages.nodes[0].acfHero.images;

  return data;
}
