import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import redirect from 'next-redirect';
import withRedux from 'next-redux-wrapper';
import { I18nextProvider } from 'react-i18next';
import createI18n from '../services/i18n';
import { getCurrentUser } from '../selectors/current_user_selectors';
import { getTranslations } from '../services/api';
import initStore from '../store/init_store';
import AuthLayout from '../layouts/auth_layout';
import AddExtraInfoContainer from '../containers/add_extra_info_container';
import { logIn, homePage } from '../routes';

class AddExtraInfo extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired
  }

  static async getInitialProps(ctx) {
    const currentUser = getCurrentUser(
      ctx.store.getState()
    );

    if (!currentUser.id) {
      return redirect(ctx, logIn);
    }

    if (currentUser.phone || currentUser.jobTitle || currentUser.organization) {
      return redirect(ctx, homePage);
    }

    const commonTranslations = await getTranslations('common');
    const signUpTranslations = await getTranslations('add_extra_info');

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
              {this.i18n.t('addExtraInfo:title')}
            </title>
          </Head>

          <AuthLayout>
            <AddExtraInfoContainer />
          </AuthLayout>
        </div>
      </I18nextProvider>
    );
  }
}

export default withRedux(initStore, null, {})(AddExtraInfo);
