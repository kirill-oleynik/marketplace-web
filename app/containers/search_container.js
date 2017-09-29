import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { translate } from 'react-i18next';

import { home } from '../routes';
import {
  getApplications, getCategoriesWithApplications
} from '../selectors/search_selectors';
import {
  expand as expandAction, collapse as collapseAction
} from '../actions/categories_actions';

import MainButton from '../components/main_button';
import CategoriesList from '../components/categories/list';
import ApplicationsList from '../components/applications/list';

const SearchContainer = ({ t, expand, collapse, categories, applications }) => (
  <Container>
    <section className="pt-60">
      {
        (categories.length || applications.length) ? (
          <div>
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
          </div>
        ) : (
          <div className="pb-50">
            <p className="font-24 font-700 mb-50">
              {t('empty.title')}
            </p>

            <div className="message-block">
              <img
                alt=""
                src="/static/images/search.png"
                className="message-block__img message-block__img--search"
                srcSet="/static/images/search@2x.png 2x, /static/images/search@3x.png 3x"
              />

              <p className="font-24 mb-10">
                {t('empty.title')}
              </p>

              <p className="font-14 mb-30">
                {t('empty.description')}
              </p>

              <Link href={home}>
                <MainButton size="md" color="blue">
                  {t('empty.backToHome')}
                </MainButton>
              </Link>
            </div>
          </div>
        )
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
