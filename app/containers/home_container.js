import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Sticky, StickyContainer } from 'react-sticky';

import MainFooter from '../components/footer';
import InputSearch from '../components/input_search';
import HeaderContainer from '../containers/header_container';
import CategoriesList from '../components/categories/list';
import CategoriesDropdown from '../components/categories/dropdown';
import CategoriesLinkList from '../components/categories/link_list';
import CategoriesContainer from '../containers/categories_container';
import { getApplications } from '../selectors/applications_selectors';

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

const HomeContainer = ({ applications }) => (
  <div className="page-container">
    <HeaderContainer />

    <main className="flex-grow-1">
      <section className="home-header">
        <Container>
          <div className="home-header__content">
            <div className="mb-45">
              <h1 className="home-header__main-title">
                Discover, Compare, and Choose the Best Business Apps
              </h1>

              <p className="home-header__descr">
                Discover categories in order to find more
                than 100 resources to make your business
              </p>
            </div>
            <Row>
              <Col xs="12" sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} >
                <InputSearch />
              </Col>
            </Row>
          </div>
        </Container>

        <ApplicationsCarousel
          applications={applications}
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
                <Sticky topOffset={-30}>
                  {
                    (stickyOptions) => (
                      <CategoriesLinkListContainer
                        stickyOptions={{
                          ...stickyOptions,
                          style: {
                            ...stickyOptions.style,
                            top: '30px',
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

    <MainFooter />
  </div>
);

HomeContainer.propTypes = {
  applications: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  applications: getApplications(state)
});

export default connect(mapStateToProps)(HomeContainer);
