import { Container } from 'reactstrap';
import MainButton from './main_button';
import HeaderModalMenu from './header_modal_menu';

class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <header className="main-header">
          <Container>
            <div className="main-header__content">
              <div className="hidden-md-up">
                <a href="/" className="main-header__btn-menu icon icon-menu" onClick={this.toggle} />
              </div>
              <a href="/" className="main-header__main-logo">Application</a>
              <div className="hidden-sm-down">
                <MainButton color="transparent" size="md">Submit App</MainButton>
                <a href="/" className="main-header__link">Log In</a>
                <MainButton color="white" size="md">Sign Up</MainButton>
              </div>
              <div className="hidden-md-up">
                <a href="/" className="main-header__search-btn icon icon-search" />
              </div>
            </div>
          </Container>
        </header>
        <HeaderModalMenu
          isOpen={this.state.modal}
          toggle={this.toggle} />
      </div>
    )
  }
}

export default MainHeader;
