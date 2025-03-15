export async function handler(event, context) {
    try {
      const apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?${event.rawQueryString}`;
  
      const response = await fetch(apiUrl, {
        headers: { "User-Agent": "Mozilla/5.0" } // Mimic browser request
      });
  
      const data = await response.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch Swiggy API" })
      };
    }
  }
  