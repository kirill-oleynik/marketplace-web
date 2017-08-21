import React from 'react';
import Head from 'next/head';
import { Container } from 'reactstrap';
import withRedux from 'next-redux-wrapper';
import Header from './../containers/header_container';
import AllRights from './../components/all_rights';
import LogInForm from './../components/log_in_form';
import initStore from './../store/init_store';

const LogIn = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className="page-container">
      <Header />
      <main className="login__container flex-grow-1">
        <div className="login__wrap">
          <Container>
            <LogInForm />
            <AllRights />
          </Container>
        </div>
      </main>
    </div>
  </div>
);

export default withRedux(initStore, null, {})(LogIn);
