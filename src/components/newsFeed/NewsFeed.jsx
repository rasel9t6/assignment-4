import LeftNewsFeed from './LeftNewsFeed';
import RightNewsFeed from './RightNewsFeed';

export default function NewsFeed() {
  return (
    <main className='my-10 lg:my-14'>
      <div className='container mx-auto grid grid-cols-12 gap-8'>
        <LeftNewsFeed />
        <RightNewsFeed />
      </div>
    </main>
  );
}
