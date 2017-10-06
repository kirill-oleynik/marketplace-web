import React, { Component } from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../../store';
import withTranslations from '../../with_translations';
import { load } from '../../actions/page_actions';

import AuthLayout from '../../layouts/auth_layout';
import ResetPasswordConfirmContainer from '../../containers/reset_password/confirm_container';

class ResetPasswordConfirm extends Component {
  static propTypes = {
    i18n: PropTypes.object.isRequired,
    requestParams: PropTypes.object.isRequired
  }

  static async getInitialProps({ store, ...rest }) {
    store.dispatch(
      load({
        name: 'reset_password/confirm',
        context: rest
      })
    );

    return {
      requestParams: { recoveryToken: rest.query.recoveryToken }
    };
  }

  render() {
    const { i18n, requestParams } = this.props;

    return (
      <I18nextProvider i18n={i18n}>
        <div>
          <Head>
            <title>
              {i18n.t('resetPassword:title')}
            </title>
          </Head>

          <AuthLayout>
            <ResetPasswordConfirmContainer
              requestParams={requestParams}
            />
          </AuthLayout>
        </div>
      </I18nextProvider>
    );
  }
}

export default withReduxAndSaga(
  withTranslations('resetPassword', 'common')(ResetPasswordConfirm)
);
