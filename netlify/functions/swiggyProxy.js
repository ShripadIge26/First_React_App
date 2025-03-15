exports.handler = async function (event, context) {
    const fetch = (await import("node-fetch")).default; // Dynamic import for node-fetch
  
    console.log("Raw Query String:", event.rawQueryString);
    console.log("Query Parameters:", event.queryStringParameters);
  
    const { lat, lng } = event.queryStringParameters || {}; // Extract lat & lng
  
    if (!lat || !lng) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing lat or lng parameters", received: event.queryStringParameters }),
      };
    }
  
    try {
      const apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?${event.rawQueryString}`;
      console.log("Fetching Swiggy API:", apiUrl);
  
      const response = await fetch(apiUrl, {
        headers: { "User-Agent": "Mozilla/5.0" },
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
  };
  