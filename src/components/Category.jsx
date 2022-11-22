import React from 'react';
import { categorys } from '../utils/content';

const Category = ({ selectCategory, setSelectCategory }) => {
  return (
    <div>
      {categorys.map((category) => (
        <button
          style={{
            backgroundColor:
              category.name === selectCategory
                ? 'rgb(95 70 252)'
                : 'transparent',
          }}
          key={category.name}
          onClick={() => setSelectCategory(category.name)}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Category;
