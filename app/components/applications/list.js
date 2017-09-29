import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import ApplicationPreview from './preview';

const ApplicationsList = ({ applications }) => (
  <div>
    <Row>
      {
        applications.map((application) => (
          <Col md="6" xs="12" key={application.id}>
            <ApplicationPreview
              application={application}
            />
          </Col>
        ))
      }
    </Row>
  </div>
);

ApplicationsList.propTypes = {
  applications: PropTypes.array.isRequired
};

export default ApplicationsList;
