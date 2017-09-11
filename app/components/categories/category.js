import React from 'react';
import take from 'lodash/take';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { translate } from 'react-i18next';

import ButtonWithIcon from '../button_with_icon';
import ApplicationPreview from '../applications/preview';

const getApplications = (category) => (
  category.isFetched ? category.applications : take(category.applications, 4)
);

export const Category = ({ t, expand, collapse, category }) => (
  <div id={category.slug} className="mb-20">
    <div className="mb-30">
      <h3 className="font-20 font-700">
        {category.title}
      </h3>
    </div>

    <Row>
      {
        getApplications(category).map((application) => (
          <Col xs="12" md="6" key={application.id}>
            <ApplicationPreview
              application={application}
            />
          </Col>
        ))
      }
    </Row>

    <div className="text-center text-md-left">
      {
        category.isFetched ? (
          <ButtonWithIcon
            icon="arrow-up"
            className="mb-10"
            text={t('categories.showLess')}
            onClick={() => collapse(category)}
          />
        ) : (
          <ButtonWithIcon
            icon="arrow-down"
            className="mb-10"
            text={t('categories.showMore')}
            onClick={() => expand(category)}
          />
        )
      }
    </div>
  </div>
);

Category.propTypes = {
  t: PropTypes.func.isRequired,
  expand: PropTypes.func.isRequired,
  collapse: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired
};

export default translate(['common'])(Category);
