import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import redirect from 'next-redirect';
import { I18nextProvider } from 'react-i18next';
import withReduxAndSaga from '../store';
import createI18n from '../services/i18n';
import { getCurrentUser } from '../selectors/current_user_selectors';
import { getTranslations } from '../services/api';
import AuthLayout from '../layouts/auth_layout';
import AddExtraInfoContainer from '../containers/add_extra_info_container';
import { signIn, home } from '../routes';

class AddExtraInfo extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired
  }

  static async getInitialProps(ctx) {
    const currentUser = getCurrentUser(
      ctx.store.getState()
    );

    if (!currentUser.id) {
      return redirect(ctx, signIn);
    }

    if (currentUser.phone || currentUser.jobTitle || currentUser.organization) {
      return redirect(ctx, home);
    }

    const commonTranslations = await getTranslations('common');
    const addExtraInfoTranslations = await getTranslations('add_extra_info');

    return {
      translations: {
        ...commonTranslations,
        ...addExtraInfoTranslations
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

export default withReduxAndSaga(AddExtraInfo);
