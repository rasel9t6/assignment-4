import { useContext } from 'react';
import { NewsContext } from '../../context';

const Categories = ({ className }) => {
  const { setEndpoint } = useContext(NewsContext);

  const handleCategoryClick = (category) => {
    setEndpoint(`top-headlines?category=${category}`);
  };

  return (
    <>
      <li className={className}>
        <a
          href='#'
          onClick={() => handleCategoryClick('general')}
        >
          General
        </a>
      </li>
      <li>
        <a
          href='#'
          onClick={() => handleCategoryClick('business')}
        >
          Business
        </a>
      </li>
      <li>
        <a
          href='#'
          onClick={() => handleCategoryClick('entertainment')}
        >
          Entertainment
        </a>
      </li>
      <li>
        <a
          href='#'
          onClick={() => handleCategoryClick('health')}
        >
          Health
        </a>
      </li>
      <li>
        <a
          href='#'
          onClick={() => handleCategoryClick('science')}
        >
          Science
        </a>
      </li>
      <li>
        <a
          href='#'
          onClick={() => handleCategoryClick('sports')}
        >
          Sports
        </a>
      </li>
      <li>
        <a
          href='#'
          onClick={() => handleCategoryClick('technology')}
        >
          Technology
        </a>
      </li>
    </>
  );
};

export default Categories;
