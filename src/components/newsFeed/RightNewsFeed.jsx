import { formatDate } from '../../utils/date-util';

export default function rightNewsFeed({ article }) {
  const { title, url, description, content, publishedAt, urlToImage } = article;
  return (
    <div className='space-y-6 divide-y-2 divide-[#D5D1C9]'>
      <div className='col-span-12 mb-6 md:col-span-8'>
        {/*Some image urls are missing,so set a default image url if the API image url is null or missing.*/}
        <img
          className='w-full'
          src={
            urlToImage || 'https://i.ytimg.com/vi/VaVP5QAIyrA/maxresdefault.jpg'
          }
          alt={title}
        />

        <div className='col-span-12 mt-6 md:col-span-4'>
          <a href={url}>
            <h3 className='mb-2.5 text-xl font-bold lg:text-[20px]'>{title}</h3>
          </a>
          {/*Some article descriptions and content are missing, so conditionally render a tag to redirect the user to the news page.*/}
          <p className='text-base text-[#292219]'>
            {content || description || (
              <a
                href={url}
                className='text-blue-800 underline'
              >
                Continue reading...
              </a>
            )}
          </p>
          <p className='mt-5 text-base text-[#94908C]'>
            {formatDate(publishedAt, 'date-time')}
          </p>
        </div>
      </div>
    </div>
  );
}
