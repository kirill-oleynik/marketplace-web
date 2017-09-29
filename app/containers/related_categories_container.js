import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { expand, collapse } from '../actions/categories_actions';
import {
  getRelatedCategoriesWithApplications
} from '../selectors/categories_selectors';

import CategoriesList from '../components/categories/list';

const isDeviderNeeded = (categories) => (
  categories.length &&
  categories.map((category) => category.applications.length)
            .reduce((accum, length) => (accum + length), 0) > 0
);

const RelatedCategoriesContainer = ({ categories, ...rest }) => (
  <div>
    {
      isDeviderNeeded(categories) ? (
        <div className="divider divider--dark mb-30" />
      ) : null
    }

    <CategoriesList
      categories={categories}
      {...rest}
    />
  </div>
);

RelatedCategoriesContainer.propTypes = {
  categories: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  verticalLayout: true,
  categories: getRelatedCategoriesWithApplications(state)
});

const mapDispatchToProps = {
  expand,
  collapse
};

export default connect(mapStateToProps, mapDispatchToProps)(
  RelatedCategoriesContainer
);
