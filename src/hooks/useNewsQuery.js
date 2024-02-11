import { useEffect, useState, useCallback } from 'react';

export const useNewsQuery = (defaultEndpoint) => {
  const apiUrl = import.meta.env.VITE_NEWS_API_URL;
  const [newsData, setNewsData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [endpoint, setEndpoint] = useState(defaultEndpoint);

  const fetchData = useCallback(async () => {
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
  }, [apiUrl, endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { newsData, isLoading, error, setEndpoint };
};
