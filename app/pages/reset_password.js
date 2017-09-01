import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from 'reactstrap';
import withRedux from 'next-redux-wrapper';
import { I18nextProvider } from 'react-i18next';
import createI18n from '../services/i18n';
import { getTranslations } from '../services/api';
import Header from './../containers/header_container';
import AllRights from './../components/all_rights';
import ResetPasswordForm from './../components/auth/reset_password_form';
import initStore from './../store/init_store';

class ResetPassword extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired
  }

  static async getInitialProps() {
    const commonTranslations = await getTranslations('common');

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
            <title>Home</title>
          </Head>

          <div className="page-container">
            <Header />
            <main className="login__container flex-grow-1">
              <div className="login__wrap">
                <Container>
                  <ResetPasswordForm />
                  <AllRights />
                </Container>
              </div>
            </main>
          </div>
        </div>
      </I18nextProvider>
    );
  }
}

export default withRedux(initStore, null, {})(ResetPassword);
