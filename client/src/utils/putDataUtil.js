import axios from "axios";

export default async function putDataUtil(apiEndpoint, data) {
  try {
    // Make a POST request to the specified endPoint with the provided data
    const response = await axios.put(apiEndpoint, data);

    // Check if the response status is within the 2xx range, indicating success
    if (response.status >= 200 && response.status < 300) {
      // Return the response data if the request was successful
      return response.data;
    } else {
      // If the response status is outside the 2xx range, throw an error
      throw new Error(
        `Failed to make POST request. Status: ${response.status}`
      );
    }
  } catch (error) {
    // Handle any errors that occurred during the request
    console.error("Error making POST request:", error.message);
    throw error; // Re-throw the error to propagate it to the caller
  }
}
