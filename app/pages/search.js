import React from 'react';
import Head from 'next/head';
import { Container } from 'reactstrap';
import withRedux from 'next-redux-wrapper';
import MainFooter from './../components/footer';
import Header from './../containers/header_container';
import AppBlock from './../components/app_block';
import GoTopLink from './../components/go_top_link';
import initStore from './../store/init_store';

const Search = () => (
  <div>
    <Head>
      <title>Search</title>
    </Head>

    <div className="page-container">
      <Header />
      <main className="flex-grow-1">
        <Container>
          <section className="pt-60">
            <p className="font-24 font-700">Applications</p>
            <AppBlock />
            <div className="divider divider--dark mb-30" />
            <p className="font-24 font-700">Categories</p>
            <AppBlock />
          </section>
        </Container>
        <GoTopLink />
      </main>
      <MainFooter />
    </div>
  </div>
);

export default withRedux(initStore, null, {})(Search);
