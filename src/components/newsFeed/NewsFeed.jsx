import LeftNewsFeed from './LeftNewsFeed';
import RightNewsFeed from './RightNewsFeed';

import { useContext } from 'react';
import { NewsContext } from '../../context';

export default function NewsFeed() {
  const { newsData, isLoading, error } = useContext(NewsContext);

  // If data is still loading or if there's an error, return null
  if (isLoading || error || !newsData) {
    return null;
  }

  // Calculate the midpoint of the articles array
  const midpoint = Math.ceil(newsData?.articles.length / 2);

  // Split the articles array into two halves
  const leftArticles = newsData?.articles.slice(0, midpoint);
  const rightArticles = newsData?.articles.slice(midpoint);

  return (
    <main className='my-10 lg:my-14'>
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
