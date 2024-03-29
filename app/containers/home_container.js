import React from 'react';

import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { Sticky, StickyContainer } from 'react-sticky';

import withFixedHeader from '../with_fixed_header';
import { fetch as searchFetch } from '../actions/search_actions';
import { getCategories, getApplications } from '../selectors/search_selectors';
import {
  getApplications as getFeaturedApplications
} from '../selectors/applications_selectors';

import Autocomplete from '../components/autocomplete';
import CategoriesList from '../components/categories/list';
import FooterContainer from '../containers/footer_container';
import HeaderContainer from '../containers/header_container';
import ScrollTopButton from '../components/scroll_top_button';
import GeneralFooter from '../components/footer/general_footer';
import CategoriesDropdown from '../components/categories/dropdown';
import CategoriesLinkList from '../components/categories/link_list';
import CategoriesContainer from '../containers/categories_container';

const CategoriesListContainer = CategoriesContainer(CategoriesList);
const CategoriesDropdownContainer = CategoriesContainer(CategoriesDropdown);
const CategoriesLinkListContainer = CategoriesContainer(CategoriesLinkList);

const ApplicationsCarousel = dynamic(
  import('../components/applications/carousel'),
  {
    ssr: false,
    loading: () => null
  }
);

const HomeContainer = ({
  t, fetch, searchCategories, isHeaderFixed, searchApplications, featuredApplications
}) => (
  <div className={`page-container ${isHeaderFixed ? 'pt-60' : ''}`}>
    <HeaderContainer
      fixed={isHeaderFixed}
    />

    <main className="flex-grow-1">
      <section className="home-header">
        <Container>
          <div className="home-header__content">
            <div className="mb-45">
              <h1 className="home-header__main-title">
                {t('title')}
              </h1>

              <p className="home-header__descr">
                {t('description')}
              </p>
            </div>

            <Row>
              <Col
                xs="12"
                sm={{ size: 8, offset: 2 }}
                md={{ size: 6, offset: 3 }}
              >
                <Autocomplete
                  fetch={fetch}
                  categories={searchCategories}
                  applications={searchApplications}
                  placeholder={t('search.placeholder')}
                />
              </Col>
            </Row>
          </div>
        </Container>

        <ApplicationsCarousel
          applications={featuredApplications}
        />
      </section>

      <section className="hidden-sm-up">
        <CategoriesDropdownContainer />
      </section>

      <Container>
        <section className="pt-30">
          <Row>
            <Col xs="12" sm="3" className="hidden-xs-down">
              <StickyContainer style={{ height: '100%' }}>
                <Sticky topOffset={-60}>
                  {
                    (stickyOptions) => (
                      <CategoriesLinkListContainer
                        stickyOptions={{
                          ...stickyOptions,
                          style: {
                            ...stickyOptions.style,
                            top: '61px',
                            zIndex: 2
                          }
                        }}
                      />
                    )
                  }
                </Sticky>
              </StickyContainer>
            </Col>

            <Col xs="12" sm="9">
              <CategoriesListContainer />
            </Col>
          </Row>
        </section>
      </Container>
    </main>

    <FooterContainer>
      <GeneralFooter />
    </FooterContainer>

    <ScrollTopButton />
  </div>
);

HomeContainer.propTypes = {
  t: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  isHeaderFixed: PropTypes.bool.isRequired,
  searchCategories: PropTypes.array.isRequired,
  searchApplications: PropTypes.array.isRequired,
  featuredApplications: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  searchCategories: getCategories(state),
  searchApplications: getApplications(state),
  featuredApplications: getFeaturedApplications(state)
});

const mapDispatchToProps = {
  fetch: searchFetch
};

export default connect(mapStateToProps, mapDispatchToProps)(
  translate(['home'])(
    withFixedHeader('.home-page main > .container')(HomeContainer)
  )
);
