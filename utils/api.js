export async function fetchAPI(path) {
  const requestUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api${path}`;
  console.log(requestUrl);

  try {
    const response = await fetch(requestUrl);

    if (!response.ok) {
      // If the response is not OK, throw an error with the status text
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Log the error to the console
    console.error("Fetch API error:", error);

    // You can also return a default value or rethrow the error
    return { data: null, error: error.message };
  }
}
