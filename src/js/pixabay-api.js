const API_KEY = '45077821-aa67b100696f1310c7d1f60f1';

export async function fetchImages(query, page = 1, perPage = 9) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Fetching images failed:', error);
    throw error;
  }
}
