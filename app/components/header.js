import { Container } from 'reactstrap';
import MainButton from './main_button';

const MainHeader = () => (
  <header className="main-header">
    <Container>
      <div className="main-header__content">
        <a href="#" className="main-header__btn-menu hidden-md-up icon icon-menu"></a>
          <a href="#" className="main-header__main-logo">Application</a>
          <div className="hidden-sm-down">
            <MainButton color="transparent" size="md">Submit App</MainButton>
            <a href="#" className="main-header__link">Log In</a>
            <MainButton color="white" size="md">Sign Up</MainButton>
          </div>
          <div className="hidden-md-up">
            <a href="#" className="main-header__search-btn icon icon-search"></a>
          </div>
        </div>
      </Container>
  </header>
)

export default MainHeader;
