import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import redirect from 'next-redirect';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../store';
import withTranslations from '../with_translations';

import { home } from '../routes';
import { getCurrentUser } from '../selectors/current_user_selectors';
import AuthLayout from '../layouts/auth_layout';
import SignInContainer from '../containers/sign_in_container';

class SignIn extends Component {
  static propTypes = {
    i18n: PropTypes.object.isRequired
  }

  static async getInitialProps(ctx) {
    const currentUser = getCurrentUser(
      ctx.store.getState()
    );

    if (currentUser.id) {
      return redirect(ctx, home);
    }

    return {};
  }

  render() {
    const { i18n } = this.props;

    return (
      <I18nextProvider i18n={i18n}>
        <div>
          <Head>
            <title>
              {i18n.t('signIn:title')}
            </title>
          </Head>

          <AuthLayout>
            <SignInContainer />
          </AuthLayout>
        </div>
      </I18nextProvider>
    );
  }
}

export default withReduxAndSaga(
  withTranslations('signIn', 'common')(SignIn)
);
