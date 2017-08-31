import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { getCurrentUser } from '../selectors/current_user_selectors';
import MainButton from '../components/main_button';
import ButtonCircle from '../components/button_circle';
import HeaderModalMenu from '../components/header_modal_menu';
import HeaderDropdownMenu from '../components/header_dropdown_menu';
import SubmitApp from '../components/submit_app';

export class HeaderContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired
  }

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
              <div className="hidden-sm-up">
                <a
                  href="/#"
                  className="main-header__btn-menu icon icon-menu in-white"
                  onClick={this.toggle}
                />
              </div>

              <a href="/" className="page-main-logo">Appreview</a>

              {
                currentUser.id ? (
                  <div className="d-flex align-items-center hidden-xs-down">
                    <ButtonCircle
                      size="sm"
                      color="grey-light"
                      icon="heart-filled"
                      className="in-white mr-20"
                    />

                    <HeaderDropdownMenu />
                  </div>
                ) : (
                  <div className="hidden-xs-down">
                    <MainButton color="transparent" size="md">
                      Submit App
                    </MainButton>

                    <Link href="/log_in">
                      <a className="main-header__link">
                        Log In
                      </a>
                    </Link>

                    <Link href="/sign_up">
                      <MainButton color="white" size="md">
                        Sign Up
                      </MainButton>
                    </Link>
                  </div>
                )
              }

              <div className="hidden-sm-up">
                <a href="/" className="main-header__search-btn icon icon-search" />
              </div>
            </div>
          </Container>
        </header>

        <HeaderModalMenu
          isOpen={this.state.modal}
          toggle={this.toggle}
        />

        <SubmitApp
          toggle={this.toggle}
        />

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps, null)(HeaderContainer);
