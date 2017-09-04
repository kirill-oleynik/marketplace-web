import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Modal, Container
} from 'reactstrap';
import classnames from 'classnames';
import MainButton from '../main_button';
import MainInput from '../main_input';
import ProfileFormContainer from '../../containers/profile/profile_form_container';

class ProfileModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1'
    };

    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { isOpen, closeModal, currentUser } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        className="main-modal"
      >
        <Container>
          <div className="text-right pt-30">
            <button
              type="button"
              onClick={closeModal}
            >
              <i className="icon icon-cross font-16 in-black-035" />
            </button>
          </div>

          <Row className="main-modal__content">
            <Col
              xs="12"
              sm={{ size: 8, offset: 2 }}
              md={{ size: 6, offset: 3 }}
            >
              <p className="font-24 font-700 mb-30">
                { currentUser.fullName }
              </p>

              <div className="main-tabs">
                <Nav tabs className="main-tabs__nav">
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggleTab('1'); }}
                    >
                      Profile
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggleTab('2'); }}
                    >
                      Password
                    </NavLink>
                  </NavItem>
                </Nav>

                <TabContent
                  activeTab={this.state.activeTab}
                >
                  <TabPane tabId="1">
                    <ProfileFormContainer />
                  </TabPane>

                  <TabPane tabId="2">
                    <div className="mb-20">
                      <MainInput
                        type="password"
                        name="old-pass"
                        label="Old Password"
                        className="mb-10"
                      />

                      <MainInput
                        type="password"
                        name="new-pass"
                        label="New Password"
                        className="mb-10"
                      />

                      <MainInput
                        type="password"
                        name="confirm-pass"
                        label="Confirm Password"
                        className="mb-10"
                      />
                    </div>

                    <MainButton
                      color="blue"
                      size="lg"
                      className="w-100 mb-20"
                      disabled
                    >
                      Change Password
                    </MainButton>
                  </TabPane>
                </TabContent>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal>
    );
  }
}

ProfileModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired
};

export default ProfileModal;
