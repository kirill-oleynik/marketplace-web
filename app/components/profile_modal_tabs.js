import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import MainButton from './main_button';
import MainInput from './main_input';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="main-tabs">
        <Nav tabs className="main-tabs__nav">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Password
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <div className="mb-20">
              <Row>
                <Col xs="12" sm="6">
                  <MainInput name="name" label="First Name" className="mb-10" />
                </Col>
                <Col xs="12" sm="6">
                  <MainInput name="name" label="Last Name" className="mb-10" />
                </Col>
              </Row>
              <MainInput type="email" name="email" label="Email" className="mb-10" />
              <MainInput name="organization" label="Organization" className="mb-10" />
              <MainInput name="job" label="Job Title" className="mb-10" />
              <MainInput name="phone" label="Phone" className="mb-10" />
            </div>
            <MainButton color="blue" size="lg" className="w-100 mb-20">Update Settings</MainButton>
          </TabPane>
          <TabPane tabId="2">
            <div className="mb-20">
              <MainInput type="password" name="old-pass" label="Old Password" className="mb-10" />
              <MainInput type="password" name="new-pass" label="New Password" className="mb-10" />
              <MainInput type="password" name="confirm-pass" label="Confirm Password" className="mb-10" />
            </div>
            <MainButton color="blue" size="lg" className="w-100 mb-20" disabled>Change Password</MainButton>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
