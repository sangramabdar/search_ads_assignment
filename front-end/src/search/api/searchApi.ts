const SEARCH_URL = "http://localhost:8080/api/search";

async function getRequest(url: string) {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok)
      return {
        data: null,
        error: "something went wrong",
      };

    const responseBody = await response.json();

    return {
      data: responseBody,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error.message,
    };
  }
}

async function getAds(searchQuery: string) {
  const SEARCH_URL_WIHT_QUERY = SEARCH_URL + "?q=" + searchQuery;

  const result = await getRequest(SEARCH_URL_WIHT_QUERY);

  return result;
}

export default getAds;
