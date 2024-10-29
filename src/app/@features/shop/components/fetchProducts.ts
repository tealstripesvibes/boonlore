export async function fetchProducts() {
  const URL = import.meta.env.VITE_SHOP_URL;

  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch main data: ${response.statusText}`);
    }

    const urls = await response.json();

    if (!Array.isArray(urls)) {
      throw new Error("Unexpected response format, expected an array of URLs");
    }

    const allCategories = await fetchAllData(urls);
    const allItems = await fetchAllData(allCategories.flat());

    console.log({ allItems });

    return allItems.filter((item) => item !== null);
  } catch (error) {
    console.error("Error fetching shop data:", error);
    throw error; // Optionally, re-throw the error to handle it upstream
  }
}

async function fetchAllData(urls: string[]): Promise<any[]> {
  return await Promise.all(
    urls.map(async (url) => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${url}`);
        }

        return await response.json();
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return null; // Return null to handle failure but keep the Promise chain intact
      }
    }),
  );
}
