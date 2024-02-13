import { formatDate } from '../../utils/date-util';

export default function rightNewsFeed({ article }) {
  const { title, description, content, publishedAt, urlToImage } = article;
  return (
    <div className='space-y-6 divide-y-2 divide-[#D5D1C9]'>
      {/* <!-- news item --> */}
      <div className='col-span-12 mb-6 md:col-span-8'>
        <img
          className='w-full'
          src={
            urlToImage || 'https://i.ytimg.com/vi/VaVP5QAIyrA/maxresdefault.jpg'
          }
          alt={title}
        />
        {/* <!-- info --> */}
        <div className='col-span-12 mt-6 md:col-span-4'>
          <a href='#'>
            <h3 className='mb-2.5 text-xl font-bold lg:text-[20px]'>{title}</h3>
          </a>
          <p className='text-base text-[#292219]'>{content || description}</p>
          <p className='mt-5 text-base text-[#94908C]'>
            {formatDate(publishedAt, 'date-time')}
          </p>
        </div>
      </div>
    </div>
  );
}
