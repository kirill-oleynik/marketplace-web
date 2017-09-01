import React from 'react';
import Head from 'next/head';
import { Container } from 'reactstrap';
import withRedux from 'next-redux-wrapper';
import MainFooter from './../components/footer';
import Header from './../containers/header_container';
import GoTopLink from './../components/go_top_link';
import initStore from './../store/init_store';
import MessageBlock from './../components/message_block';

const Favorites = () => (
  <div>
    <Head>
      <title>404</title>
    </Head>

    <div className="page-container">
      <Header />
      <main className="d-flex align-items-center flex-grow-1">
        <Container>
          <section className="pt-60">
            <MessageBlock image="404" imageSize="lg" />
          </section>
        </Container>
        <GoTopLink />
      </main>
      <MainFooter />
    </div>
  </div>
);

export default withRedux(initStore, null, {})(Favorites);
