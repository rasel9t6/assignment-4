import { useEffect, useState } from 'react';

export const useNewsFeed = (endpoint) => {
  const apiUrl = import.meta.env.VITE_NEWS_API_URL;
  const [newsData, setNewsData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${apiUrl}/${endpoint}`);
        if (!response.ok) {
          throw new Error('Failed to fetch news data...');
        }
        const jsonData = await response.json();
        setNewsData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, endpoint]);

  return { newsData, isLoading, error };
};
