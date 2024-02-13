import { NewsContext } from '../context';
import { useNewsQuery } from '../hooks/useNewsQuery';

const NewsProvider = ({ children }) => {
  // When component mount default api endpoint (top headlines) fetch news data.
  const { newsData, setNewsData, isLoading, error, setEndpoint } =
    useNewsQuery('top-headlines');

  return (
    <NewsContext.Provider
      value={{
        newsData,
        setNewsData,
        isLoading,
        error,
        setEndpoint,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
