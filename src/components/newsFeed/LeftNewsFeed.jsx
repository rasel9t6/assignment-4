import { formatDate } from '../../utils/date-util';

export default function LeftNewsFeed({ article }) {
  const {
    title,
    author,
    description,
    content,
    publishedAt,
    source,
    url,
    urlToImage,
  } = article;

  // Function to remove HTML tags from author string
  const removeHtmlTags = (str) => {
    if (!str) return '';
    return str.replace(/(<([^>]+)>)/gi, '');
  };

  const renderedAuthor = removeHtmlTags(author);
  return (
    <div className='col-span-12 grid grid-cols-12 gap-4'>
      <div className='col-span-12 lg:col-span-4'>
        <a href={url}>
          <h3 className='mb-2.5 text-2xl font-bold lg:text-[28px]'>{title}</h3>
        </a>
        {/*Some article descriptions and content are missing, so conditionally render a tag to redirect the user to the news page.*/}
        <p className='text-base text-[#5C5955]'>
          {description || content || (
            <a
              href={url}
              className='text-blue-800 underline'
            >
              Continue reading...
            </a>
          )}
        </p>
        <p className='mt-5 text-base text-[#5C5955]'>
          {formatDate(publishedAt, 'date-time')}
        </p>
      </div>

      <div className='col-span-12 lg:col-span-8'>
        {/*Some image urls are missing,so set a default image url if the API image url is null or missing.*/}
        <img
          className='w-full'
          src={
            urlToImage || 'https://i.ytimg.com/vi/VaVP5QAIyrA/maxresdefault.jpg'
          }
          alt={title}
        />

        <p className='mt-5 text-base border-l px-3 border-[#5C5955] flex gap-3 text-[#5C5955]'>
          {/*Some author names have HTML format conversion from HTML to sting*/}
          {author && (
            <span className='border-r px-3 border-[#5C5955]'>
              Author: {renderedAuthor}
            </span>
          )}
          {source && <span>Source: {source.name}</span>}
        </p>
      </div>
    </div>
  );
}
