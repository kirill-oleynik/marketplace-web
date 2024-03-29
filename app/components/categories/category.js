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

export const Category = ({ t, expand, collapse, category, verticalLayout }) => {
  const needToFetch = category.isFetchable && !category.isFetched;
  const needToHide = category.isFetchable && category.isFetched;

  return (
    <div id={category.slug} className="mb-20">
      <div className="mb-30">
        <h3 className="font-20 font-700">
          {category.title}
        </h3>
      </div>

      <Row>
        {
          getApplications(category).map((application) => (
            <Col
              key={application.id}
              xs="12"
              sm={verticalLayout && '6'}
              md={verticalLayout ? '3' : '6'}
            >
              <ApplicationPreview
                application={application}
                vertical={verticalLayout}
              />
            </Col>
          ))
        }
      </Row>

      <div className="text-center text-md-left">
        {
          needToHide ? (
            <ButtonWithIcon
              icon="arrow-up"
              className="mb-10"
              text={t('categories.showLess')}
              onClick={() => collapse(category)}
            />
          ) : null
        }

        {
          needToFetch ? (
            <ButtonWithIcon
              icon="arrow-down"
              className="mb-10"
              text={t('categories.showMore')}
              onClick={() => expand(category)}
            />
          ) : null
        }
      </div>
    </div>
  );
};

Category.propTypes = {
  t: PropTypes.func.isRequired,
  expand: PropTypes.func.isRequired,
  collapse: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  verticalLayout: PropTypes.bool
};

Category.defaultProps = {
  verticalLayout: false
};

export default translate(['common'])(Category);
