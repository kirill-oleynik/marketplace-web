import React from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'reactstrap';
import withRedux from 'next-redux-wrapper';
import MainFooter from './../components/footer';
import Header from './../containers/header_container';
import CategoriesDropdown from './../components/categories_dropdown';
import Categories from './../components/categories';
import AppBlock from './../components/app_block';
import GoTopLink from './../components/go_top_link';
import initStore from './../store/init_store';
import MessageBlock from './../components/message_block';

const Favorites = () => (
  <div>
    <Head>
      <title>Favorites</title>
    </Head>

    <div className="page-container">
      <Header />
      <main className="flex-grow-1">
        <section className="hidden-sm-up">
          <CategoriesDropdown />
        </section>
        <Container>
          <section className="pt-60">
            <Row>
              <Col xs="12" sm="3" className="hidden-xs-down">
                <Categories />
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
);

export default withRedux(initStore, null, {})(Favorites);
