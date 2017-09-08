import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import AppItem from '../app_item';
import ButtonLinkWithIcon from '../button_link_with_icon';

export const Category = ({ category }) => (
  <div id={category.slug} className="mb-20">
    <div className="mb-30">
      <h3 className="font-20 font-700">
        {category.title}
      </h3>
    </div>

    <Row>
      <Col xs="12" md="6">
        <AppItem />
      </Col>
      <Col xs="12" md="6">
        <AppItem />
      </Col>
      <Col xs="12" md="6">
        <AppItem />
      </Col>
      <Col xs="12" md="6">
        <AppItem />
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

Category.propTypes = {
  category: PropTypes.object.isRequired
};

export default Category;
