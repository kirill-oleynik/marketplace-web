import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Sticky, StickyContainer } from 'react-sticky';
import { Container, Row, Col } from 'reactstrap';
import { I18nextProvider } from 'react-i18next';
import MainFooter from '../components/footer';
import { fetch } from '../actions/categories_actions';
import CategoriesList from '../components/categories/list';
import CategoriesDropdown from '../components/categories/dropdown';
import CategoriesContainer from '../containers/categories_container';
import HeaderContainer from '../containers/header_container';
import InputSearch from '../components/input_search';
import AppBlock from '../components/app_block';
import AppBlockVertical from '../components/app_block_vertical';
import GoTopLink from '../components/go_top_link';
import withReduxAndSaga from '../store';
import createI18n from '../services/i18n';
import { getTranslations } from '../services/api';
import Carousel from '../components/carousel';

class Index extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired
  }

  static async getInitialProps({ store }) {
    const commonTranslations = await getTranslations('common');
    const profileTranslations = await getTranslations('profile');

    store.dispatch(
      fetch()
    );

    return {
      translations: { ...commonTranslations, ...profileTranslations }
    };
  }

  constructor(props) {
    super(props);

    this.i18n = createI18n(props.translations);
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <div>
          <Head>
            <title>Home</title>
          </Head>

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
                <CategoriesContainer>
                  <CategoriesDropdown />
                </CategoriesContainer>
              </section>

              <Container>
                <section className="pt-30">
                  <Row>
                    <Col xs="12" sm="3" className="hidden-xs-down">
                      <StickyContainer style={{ height: '100%' }}>
                        <Sticky topOffset={-30}>
                          {
                            (stickyOptions) => (
                              <CategoriesContainer
                                stickyOptions={{
                                  ...stickyOptions,
                                  style: {
                                    ...stickyOptions.style,
                                    top: '30px',
                                    zIndex: 2
                                  }
                                }}
                              >
                                <CategoriesList />
                              </CategoriesContainer>
                            )
                          }
                        </Sticky>
                      </StickyContainer>
                    </Col>

                    <Col xs="12" sm="9">
                      <AppBlock />
                      <div className="divider divider--dark mb-30" />
                      <AppBlockVertical />
                    </Col>
                  </Row>
                </section>
              </Container>
              <GoTopLink />
            </main>

            <MainFooter />
          </div>
        </div>
      </I18nextProvider>
    );
  }
}

export default withReduxAndSaga(Index);
