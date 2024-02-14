import { useContext } from 'react';
import { NewsContext } from '../../context';

import { categoriesData } from '../../utils/categoriesData';
// This component reuse in header & footer component, both are synchronize with API for fetching categories data
const Categories = ({ className }) => {
  const { setEndpoint } = useContext(NewsContext);

  const handleCategoryClick = (category) => {
    setEndpoint(`top-headlines?category=${category}`);
  };

  return (
    <>
      {categoriesData.map(({ label, value }, index) => (
        <li
          key={index}
          className={`${className} cursor-pointer`}
        >
          <a onClick={() => handleCategoryClick(value)}>{label}</a>
        </li>
      ))}
    </>
  );
};

export default Categories;
