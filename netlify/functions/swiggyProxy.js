export async function handler(event, context) {
    console.log("Query Parameters:", event.rawQueryString); // Debugging log
  
    if (!event.rawQueryString) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing query parameters" })
      };
    }
  
    try {
      const apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?${event.rawQueryString}`;
      console.log("Fetching URL:", apiUrl); // Debugging log
  
      const response = await fetch(apiUrl, {
        headers: { "User-Agent": "Mozilla/5.0" } // Mimic a browser request
      });
  
      const data = await response.json();
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    } catch (error) {
      console.error("Error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch Swiggy API" })
      };
    }
  }
  