import React from 'react';
import { Container } from 'reactstrap';
import MainButton from './main_button';
import ButtonCircle from './button_circle';
import HeaderModalMenu from './header_modal_menu';
import HeaderDropdownMenu from './header_dropdown_menu';

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
    const { currentUser } = this.props;

    return (
      <div>
        <header className="main-header">
          <Container>
            <div className="main-header__content">
              <div className="hidden-md-up">
                <a
                  href="/#"
                  className="main-header__btn-menu icon icon-menu in-white"
                  onClick={this.toggle}
                />
              </div>

              <a href="/" className="page-main-logo mb-0">Application</a>

              {
                currentUser.id ? (
                  <div className="d-flex align-items-center hidden-sm-down">
                    <ButtonCircle
                      size="sm"
                      color="grey-light"
                      icon="heart-filled"
                      className="in-white mr-20"
                    />

                    <HeaderDropdownMenu />
                  </div>
                ) : (
                  <div className="hidden-sm-down">
                    <MainButton color="transparent" size="md">
                      Submit App
                    </MainButton>

                    <a href="/" className="main-header__link">
                      Log In
                    </a>

                    <MainButton color="white" size="md">
                      Sign Up
                    </MainButton>
                  </div>
                )
              }

              <div className="hidden-md-up">
                <a href="/" className="main-header__search-btn icon icon-search" />
              </div>
            </div>
          </Container>
        </header>

        <HeaderModalMenu
          isOpen={this.state.modal}
          toggle={this.toggle}
        />
      </div>
    );
  }
}

export default MainHeader;
