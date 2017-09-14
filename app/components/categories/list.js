import React from 'react';
import PropTypes from 'prop-types';
import Category from './category';

const isLastCategory = (categoryIndex, categoriesLength) => (
  categoryIndex === categoriesLength - 1
);

const CategoriesList = ({ expand, collapse, categories }) => (
  <div>
    {categories.map((category, index) => (
      category.applications.length > 0 ? (
        <div key={category.id}>
          <Category
            expand={expand}
            collapse={collapse}
            category={category}
          />

          {
            !isLastCategory(index, categories.length) ? (
              <div className="divider divider--dark mb-30" />
            ) : null
          }
        </div>
      ) : null
    ))}
  </div>
);

CategoriesList.propTypes = {
  expand: PropTypes.func.isRequired,
  collapse: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

export default CategoriesList;
