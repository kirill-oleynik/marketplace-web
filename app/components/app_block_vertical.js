import React from 'react';
import { Row, Col } from 'reactstrap';
import AppItem from './../components/app_item';
import ButtonLinkWithIcon from './../components/button_link_with_icon';

const AppBlockVertical = () => (
  <div className="mb-20">
    <div className="mb-30">
      <h3 className="font-20 font-700">Research</h3>
      <p className="font-16">
        Organize, manage, and track your project with tools that build on top
      </p>
    </div>
    <Row>
      <Col xs="12" sm="6" md="3">
        <AppItem position="vertical" />
      </Col>
      <Col xs="12" sm="6" md="3">
        <AppItem position="vertical" />
      </Col>
      <Col xs="12" sm="6" md="3">
        <AppItem position="vertical" />
      </Col>
      <Col xs="12" sm="6" md="3">
        <AppItem position="vertical" />
      </Col>
    </Row>
    <div className="text-center text-md-left">
      <ButtonLinkWithIcon
        href="/"
        icon="arrow-down"
        text="Show More"
        className="mb-10"
      />
    </div>
  </div>
);

export default AppBlockVertical;
