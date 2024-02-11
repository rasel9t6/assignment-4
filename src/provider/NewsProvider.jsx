import { NewsContext } from '../context';
import { useNewsFeed } from '../hooks/useNewsFeed';

export default function NewsProvider({ children }) {
  // api endpoints for all categories
  const headlines = useNewsFeed('/top-headlines');
  const general = useNewsFeed('/top-headlines?category=general');
  const business = useNewsFeed('/top-headlines?category=business');
  const entertainment = useNewsFeed('/top-headlines?category=entertainment');
  const health = useNewsFeed('/top-headlines?category=health');
  const science = useNewsFeed('/top-headlines?category=science');
  const sports = useNewsFeed('/top-headlines?category=sports');
  const technology = useNewsFeed('/top-headlines?category=technology');

  return (
    <NewsContext.Provider
      value={{
        headlines,
        general,
        business,
        entertainment,
        health,
        science,
        sports,
        technology,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
