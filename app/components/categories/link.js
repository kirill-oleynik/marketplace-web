import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

import { home } from '../../routes';

const goToCategory = (category) => {
  const path = `${home}?category=${category.slug}`;

  return Router.push(path, path, { shallow: true });
};

const CategoryLink = ({ category }) => (
  <span
    className="categories-link"
    onClick={() => goToCategory(category)}
  >
    {category.title}
  </span>
);

CategoryLink.propTypes = {
  category: PropTypes.object.isRequired
};

export default CategoryLink;
