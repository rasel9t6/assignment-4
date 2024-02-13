import LeftNewsFeed from './LeftNewsFeed';
import RightNewsFeed from './RightNewsFeed';
import { useContext } from 'react';
import { NewsContext } from '../../context';
import Spinner from '../shared/Spinner';

export default function NewsFeed() {
  const { newsData, isLoading, getArticlesToDisplay, splitArticles } =
    useContext(NewsContext);

  const {
    error: hasError,
    articles,
    result,
    noNewsFound,
  } = getArticlesToDisplay();

  // Display loading spinner if data is still loading
  if (isLoading) {
    return <Spinner />;
  }

  // Display error message if there's an error or no news data
  if (hasError) {
    return <div>Something went wrong...</div>;
  }

  // Display no news found message if applicable
  if (noNewsFound) {
    return <div>No news found.</div>;
  }

  // Determine which articles to display
  const { leftArticles, rightArticles } = splitArticles(articles || result);

  return (
    <main className='my-10 lg:my-14'>
      {isLoading && <Spinner />}

      {/* Display total search  result */}
      {newsData.result && (
        <div className='flex justify-center items-center mt-4'>
          <p className='py-2 px-3 bg-gradient-to-l rounded-md text-[#00835c] from-[#cdfee5] to-[#63f2b9]'>
            {newsData.result.length > 0
              ? `${newsData.totalResults} News found`
              : 'No news found'}
          </p>
        </div>
      )}

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
