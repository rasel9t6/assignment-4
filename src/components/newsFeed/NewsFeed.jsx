import LeftNewsFeed from './LeftNewsFeed';
import RightNewsFeed from './RightNewsFeed';
import { useContext } from 'react';
import { NewsContext } from '../../context';

export default function NewsFeed() {
  const { newsData, isLoading, error } = useContext(NewsContext);

  // If data is still loading, display a loading spinner
  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500'></div>
      </div>
    );
  }

  // If there's an error or no news data, display an error message or return null
  if (error || !newsData) {
    return <div>Something went wrong...</div>; // You can customize this message according to your needs
  }
  console.log(newsData);
  // Determine the articles to display based on whether it's search results or initial data
  let articlesToDisplay = [];
  if (newsData.articles) {
    articlesToDisplay = newsData.articles;
  } else if (newsData.result) {
    articlesToDisplay = newsData.result;
  } else {
    return <div>No news found.</div>;
  }

  // Calculate the midpoint of the articles array
  const midpoint = Math.ceil(articlesToDisplay.length / 2);

  // Split the articles array into two halves
  const leftArticles = articlesToDisplay.slice(0, midpoint);
  const rightArticles = articlesToDisplay.slice(midpoint);

  return (
    <main className='my-10 lg:my-14'>
      <p>{newsData.totalResults}</p>
      <div className='container mx-auto grid grid-cols-12 gap-8'>
        {/* Render the left articles */}
        <div className='col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8'>
          {leftArticles.map((article) => (
            <LeftNewsFeed
              key={crypto.randomUUID()}
              article={article}
            />
          ))}
        </div>
        {/* Render the right articles */}
        <div className='col-span-12 self-start xl:col-span-4'>
          {rightArticles.map((article) => (
            <RightNewsFeed
              key={crypto.randomUUID()}
              article={article}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
