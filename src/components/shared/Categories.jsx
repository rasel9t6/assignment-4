import { useContext } from 'react';
import { NewsContext } from '../../context';

import { categoriesData } from '../../utils/categoriesData';

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
