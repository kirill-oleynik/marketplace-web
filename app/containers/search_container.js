import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { translate } from 'react-i18next';

import {
  getApplications, getCategoriesWithApplications
} from '../selectors/search_selectors';
import {
  expand as expandAction, collapse as collapseAction
} from '../actions/categories_actions';

import CategoriesList from '../components/categories/list';
import ApplicationsList from '../components/applications/list';

const SearchContainer = ({ t, expand, collapse, categories, applications }) => (
  <Container>
    <section className="pt-60">
      {
        applications.length ? (
          <div>
            <p className="font-24 font-700 mb-50">
              {t('applications')}
            </p>

            <ApplicationsList
              applications={applications}
            />
          </div>
        ) : null
      }

      {
        applications.length && categories.length ? (
          <div className="divider divider--dark mb-30" />
        ) : null
      }

      {
        categories.length ? (
          <div>
            <p className="font-24 font-700 mb-50">{t('categories')}</p>

            <CategoriesList
              expand={expand}
              collapse={collapse}
              categories={categories}
            />
          </div>
        ) : null
      }
    </section>
  </Container>
);

SearchContainer.propTypes = {
  t: PropTypes.func.isRequired,
  expand: PropTypes.func.isRequired,
  collapse: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  applications: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  applications: getApplications(state),
  categories: getCategoriesWithApplications(state)
});

const mapDispatchToProps = {
  expand: expandAction,
  collapse: collapseAction
};

export default connect(mapStateToProps, mapDispatchToProps)(
  translate(['search'])(SearchContainer)
);
