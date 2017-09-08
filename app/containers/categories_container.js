import { connect } from 'react-redux';
import { getCategories } from '../selectors/categories_selectors';

const mapStateToProps = (state) => ({
  categories: getCategories(state)
});

export default (Component) => (
  connect(mapStateToProps)(Component)
);
