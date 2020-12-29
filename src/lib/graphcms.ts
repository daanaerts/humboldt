export interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: { url: string };
}

async function fetchAPI(query: string) {
  if (!process.env.GRAPHCMS_URL) {
    throw new Error("Missing GraphCMS URL");
  }

  const res = await fetch(process.env.GRAPHCMS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GRAPHCMS_AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      query,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getProducts(): Promise<Product[]> {
  const data = await fetchAPI(`
        {
            products {
                id
                title
                price
                thumbnail {
                  url
                }
            }
        }
    `);
  return data.products;
}

export async function getProduct(id: string): Promise<Product> {
  const data = await fetchAPI(`
        {
            product(where: {id: "${id}"}) {
                id
                title
                price
                thumbnail {
                  url
                }
            }
        }
    `);
  return data.product;
}
