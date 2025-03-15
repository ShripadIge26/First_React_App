export async function handler(event, context) {
    console.log("Raw Query String:", event.rawQueryString); // Debug log
    console.log("Query Parameters:", event.queryStringParameters); // Debug log
  
    const { lat, lng, is-seo-homepage-enabled, page_type } = event.queryStringParameters || {};
  
    if (!lat || !lng) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing lat or lng parameters" }),
      };
    }
  
    try {
      const apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?${event.rawQueryString}`;
      console.log("Fetching Swiggy API:", apiUrl); // Debug log
  
      const response = await fetch(apiUrl, {
        headers: { "User-Agent": "Mozilla/5.0" }, // Mimic browser request
      });
  
      const data = await response.json();
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (error) {
      console.error("Error fetching Swiggy API:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch Swiggy API" }),
      };
    }
  }
  