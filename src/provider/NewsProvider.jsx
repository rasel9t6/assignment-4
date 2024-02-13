import { NewsContext } from '../context';
import { useNewsQuery } from '../hooks/useNewsQuery';

const NewsProvider = ({ children }) => {
  // When component mount default api endpoint (top headlines) fetch news data.
  const { newsData, isLoading, error, setEndpoint } =
    useNewsQuery('top-headlines');

  // Function to determine which articles to display based on newsData
  const getArticlesToDisplay = () => {
    if (error || !newsData) {
      return { error: true };
    }

    if (newsData.articles) {
      return { articles: newsData.articles };
    } else if (newsData.result) {
      return { result: newsData.result };
    } else {
      return { noNewsFound: true };
    }
  };

  // Function to split articles array into two halves. news feed component have left and right news section
  const splitArticles = (articles) => {
    const midpoint = Math.ceil(articles.length / 2);
    const leftArticles = articles.slice(0, midpoint);
    const rightArticles = articles.slice(midpoint);
    return { leftArticles, rightArticles };
  };

  return (
    <NewsContext.Provider
      value={{
        newsData,
        isLoading,
        error,
        setEndpoint,
        getArticlesToDisplay,
        splitArticles,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
