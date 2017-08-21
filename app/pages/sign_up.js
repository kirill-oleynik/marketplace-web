import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { I18nextProvider } from 'react-i18next';
import createI18n from './../services/i18n';
import { getCurrentUser } from './../selectors/current_user_selectors';
import { getTranslations } from './../services/api';
import initStore from './../store/init_store';
import AuthLayout from './../layouts/auth_layout';
import SignUpContainer from './../containers/sign_up_container';

class SignUp extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired
  }

  static async getInitialProps({ res, store }) {
    const currentUser = getCurrentUser(
      store.getState()
    );

    if (currentUser.id) {
      return res.redirect('/');
    }

    const commonTranslations = await getTranslations('common');
    const signUpTranslations = await getTranslations('sign_up');

    return {
      translations: { ...commonTranslations, ...signUpTranslations }
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
            <title>
              {this.i18n.t('signUp:title')}
            </title>
          </Head>

          <AuthLayout>
            <SignUpContainer />
          </AuthLayout>
        </div>
      </I18nextProvider>
    );
  }
}

export default withRedux(initStore, null, {})(SignUp);
