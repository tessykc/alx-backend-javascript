function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating API call
    setTimeout(() => {
      resolve("Mock API response");
    }, 2000); // Simulating a 2-second delay
  });
}

export default getResponseFromAPI;
