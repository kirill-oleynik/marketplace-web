import { connect } from 'react-redux';
import { getCurrentUser } from './../selectors/current_user_selectors';
import Header from './../components/header';

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
