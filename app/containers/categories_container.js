import { connect } from 'react-redux';
import { expand, collapse } from '../actions/categories_actions';
import {
  getCategoriesWithApplications
} from '../selectors/categories_selectors';


const mapStateToProps = (state) => ({
  categories: getCategoriesWithApplications(state)
});

const mapDispatchToProps = {
  expand,
  collapse
};

export default (Component) => (
  connect(mapStateToProps, mapDispatchToProps)(Component)
);
