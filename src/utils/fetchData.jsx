const REACT_APP_RAPID_API_KEY =
  "94bfc49157mshffabd7b83d3fd20p1bb199jsn279568e52658";

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": REACT_APP_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("THİS ERROR", error);
    throw error;
  }
};

async function makeRequests() {
  const urls = [
    "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    "https://youtube-search-and-download.p.rapidapi.com/channel/about",
 
  ];

  const requestInterval = 5000; 
  const maxRequestsPerInterval = 1; 
  let remainingRequests = maxRequestsPerInterval;

  for (const url of urls) {
    try {
      if (remainingRequests <= 0) {
        await new Promise((resolve) => setTimeout(resolve, requestInterval));
        remainingRequests = maxRequestsPerInterval;
      }

      const data = await fetchData(url, exerciseOptions);
      console.log("API Response:", data);

      remainingRequests--;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

makeRequests();
