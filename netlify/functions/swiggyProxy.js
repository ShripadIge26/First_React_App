exports.handler = async (event, context) => {
    console.log("Query Parameters:", event.queryStringParameters); // Log query params
  
    const { lat, lng } = event.queryStringParameters;
  
    if (!lat || !lng) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Lat or Lng is missing" }),
      };
    }
  
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
  
      const data = await response.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal Server Error" }),
      };
    }
  };
  