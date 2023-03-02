// import { gql } from '@apollo/client';

export default async function mainNav() {
  const res = await fetch(process.env.WORDPRESS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query mainNav {
          menuItems(where: {location: PRIMARY}) {
            edges {
              node {
                id
                label
                uri
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

  const json = await res.json();
  const data = json.data.menuItems.edges;

  return data;
}
