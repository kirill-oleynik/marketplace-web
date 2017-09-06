import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories } from '../selectors/categories_selectors';

export const CategoriesContainer = ({ children, ...rest }) => (
  <div>
    {
      React.Children.map(children, (child) => (
        React.cloneElement(child, rest)
      ))
    }
  </div>
);

CategoriesContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const mapStateToProps = (state) => ({
  categories: getCategories(state)
});

export default connect(mapStateToProps)(CategoriesContainer);
