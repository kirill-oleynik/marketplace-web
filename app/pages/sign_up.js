import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import redirect from 'next-redirect';
import { I18nextProvider } from 'react-i18next';
import { home } from '../routes';
import withReduxAndSaga from '../store';
import createI18n from '../services/i18n';
import { getTranslations } from '../services/api';
import { getCurrentUser } from '../selectors/current_user_selectors';
import AuthLayout from '../layouts/auth_layout';
import SignUpContainer from '../containers/sign_up_container';

class SignUp extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired
  }

  static async getInitialProps(ctx) {
    const currentUser = getCurrentUser(
      ctx.store.getState()
    );

    if (currentUser.id) {
      return redirect(ctx, home);
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

export default withReduxAndSaga(SignUp);
