export async function handler(event) {
    const fetch = (await import("node-fetch")).default; // Dynamic import for node-fetch
  
    console.log("Raw Query String:", event.rawQueryString);
    console.log("Query Parameters:", event.queryStringParameters);
  
    const { lat, lng, page_type } = event.queryStringParameters || {}; // Extract params
  
    if (!lat || !lng) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing lat or lng parameters" }),
      };
    }
  
    const swiggyUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?${event.rawQueryString}`;
    console.log("Fetching Swiggy API:", swiggyUrl);
  
    try {
      const response = await fetch(swiggyUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0", // Prevent blocking
        },
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
  