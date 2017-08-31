import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import redirect from 'next-redirect';
import withRedux from 'next-redux-wrapper';
import { I18nextProvider } from 'react-i18next';
import createI18n from './../services/i18n';
import { getCurrentUser } from './../selectors/current_user_selectors';
import { getTranslations } from './../services/api';
import initStore from './../store/init_store';
import AuthLayout from './../layouts/auth_layout';
import LogInContainer from './../containers/log_in_container';

class LogIn extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired
  }

  static async getInitialProps(ctx) {
    const currentUser = getCurrentUser(
      ctx.store.getState()
    );

    if (currentUser.id) {
      return redirect(ctx, '/');
    }

    const commonTranslations = await getTranslations('common');
    const logInTranslations = await getTranslations('log_in');
    const headerTranslations = await getTranslations('header');

    return {
      translations: {
        ...commonTranslations,
        ...headerTranslations,
        ...logInTranslations
      }
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
              {this.i18n.t('logIn:title')}
            </title>
          </Head>

          <AuthLayout>
            <LogInContainer />
          </AuthLayout>
        </div>
      </I18nextProvider>
    );
  }
}

export default withRedux(initStore, null, {})(LogIn);
