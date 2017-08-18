import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import Header from './../containers/header_container';
import AllRights from './../components/all_rights';

const AuthLayout = ({ children }) => (
  <div>
    <div className="page-container">
      <Header />

      <main className="login__container flex-grow-1">
        <div className="login__wrap">
          <Container>
            {children}
            <AllRights />
          </Container>
        </div>
      </main>
    </div>
  </div>
);

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default AuthLayout;
