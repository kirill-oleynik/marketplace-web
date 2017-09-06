import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Sticky, StickyContainer } from 'react-sticky';
import { Container, Row, Col } from 'reactstrap';
import { I18nextProvider } from 'react-i18next';
import createI18n from '../services/i18n';
import { getTranslations } from '../services/api';
import MainFooter from '../components/footer';
import Header from '../containers/header_container';
import { fetch } from '../actions/categories_actions';
import CategoriesList from '../components/categories/list';
import CategoriesDropdown from '../components/categories/dropdown';
import CategoriesContainer from '../containers/categories_container';
import AppBlock from '../components/app_block';
import GoTopLink from '../components/go_top_link';
import withReduxAndSaga from '../store';
import MessageBlock from '../components/message_block';

class Favorites extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired
  }

  static async getInitialProps({ store }) {
    const commonTranslations = await getTranslations('common');

    store.dispatch(
      fetch()
    );

    return {
      translations: { ...commonTranslations }
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
            <title>Favorites</title>
          </Head>

          <div className="page-container">
            <Header />
            <main className="flex-grow-1">
              <section className="hidden-sm-up">
                <CategoriesContainer>
                  <CategoriesDropdown />
                </CategoriesContainer>
              </section>

              <Container>
                <section className="pt-60">
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
                      <MessageBlock image="favorites" />
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

export default withReduxAndSaga(Favorites);
