import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

export const CategoriesList = ({ t, categories, stickyOptions }) => (
  <div className="categories" style={stickyOptions.style}>
    <h4 className="categories-title">
      {t('categories')}
    </h4>

    <div>
      {
        categories.map((category) => (
          <a key={category.id} href="/" className="categories-link">
            {category.title}
          </a>
        ))
      }
    </div>
  </div>
);

CategoriesList.propTypes = {
  t: PropTypes.func.isRequired,
  stickyOptions: PropTypes.object,
  categories: PropTypes.array.isRequired
};

CategoriesList.defaultProps = {
  stickyOptions: {
    style: {}
  }
};

export default translate(['common'])(CategoriesList);
