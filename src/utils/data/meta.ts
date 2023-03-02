export default async function meta() {
  const res = await fetch(process.env.WORDPRESS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query meta {
          generalSettings {
            url
            title
          }
        }
      `
    })
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const json = await res.json(),
    data = json.data.generalSettings;

  return data;
}
