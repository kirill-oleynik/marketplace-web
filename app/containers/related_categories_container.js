import { connect } from 'react-redux';
import { expand, collapse } from '../actions/categories_actions';
import { getRelatedCategoriesWithApplications } from '../selectors/categories_selectors';

import CategoriesList from '../components/categories/list';

const mapStateToProps = (state) => ({
  categories: getRelatedCategoriesWithApplications(state),
  verticalLayout: true
});

const mapDispatchToProps = {
  expand,
  collapse
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
