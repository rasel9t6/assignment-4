export default function LeftNewsFeed({ article }) {
  const { title, author, description, publishedAt, source, url, urlToImage } =
    article;
  console.log(article);
  return (
    <div className='col-span-12 grid grid-cols-12 gap-4'>
      {/* <!-- info --> */}
      <div className='col-span-12 lg:col-span-4'>
        <a href={url}>
          <h3 className='mb-2.5 text-2xl font-bold lg:text-[28px]'>{title}</h3>
        </a>
        <p className='text-base text-[#5C5955]'>{description}</p>
        <p className='mt-5 text-base text-[#5C5955]'>{publishedAt}</p>
      </div>
      {/* <!-- thumb --> */}
      <div className='col-span-12 lg:col-span-8'>
        {urlToImage && (
          <img
            className='w-full'
            src={urlToImage}
            alt={title}
          />
        )}
        <p className='mt-5 text-base border-l px-3 border-[#5C5955] flex gap-3 text-[#5C5955]'>
          {author && (
            <span className='border-r px-3 border-[#5C5955]'>
              Author: {author}
            </span>
          )}
          {source && <span>Source: {source.name}</span>}
        </p>
      </div>
    </div>
  );
}
