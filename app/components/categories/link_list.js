import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import CategoryLink from './link';

export const CategoriesLinkList = ({ t, categories, stickyOptions }) => (
  <div className="categories" style={stickyOptions.style}>
    <h4 className="categories-title">
      {t('categories.sidebarTitle')}
    </h4>

    <div>
      {
        categories.map((category) => (
          <CategoryLink
            key={category.id}
            category={category}
          />
        ))
      }
    </div>
  </div>
);

CategoriesLinkList.propTypes = {
  t: PropTypes.func.isRequired,
  stickyOptions: PropTypes.object,
  categories: PropTypes.array.isRequired
};

CategoriesLinkList.defaultProps = {
  stickyOptions: {
    style: {}
  }
};

export default translate(['common'])(CategoriesLinkList);
