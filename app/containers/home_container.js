import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Sticky, StickyContainer } from 'react-sticky';

import Carousel from '../components/carousel';
import MainFooter from '../components/footer';
import InputSearch from '../components/input_search';
import HeaderContainer from '../containers/header_container';
import CategoriesList from '../components/categories/list';
import CategoriesDropdown from '../components/categories/dropdown';
import CategoriesLinkList from '../components/categories/link_list';
import CategoriesContainer from '../containers/categories_container';

const CategoriesListContainer = CategoriesContainer(CategoriesList);
const CategoriesDropdownContainer = CategoriesContainer(CategoriesDropdown);
const CategoriesLinkListContainer = CategoriesContainer(CategoriesLinkList);

const HomeContainer = () => (
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
        <Carousel />
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

export default connect()(HomeContainer);
