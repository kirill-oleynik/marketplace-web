import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import redirect from 'next-redirect';
import { Container } from 'reactstrap';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../../store';
import withTranslations from '../../with_translations';

import { home } from '../../routes';
import { getCurrentUser } from '../../selectors/current_user_selectors';
import Header from '../../containers/header_container';
import AllRights from '../../components/all_rights';
import ResetPasswordConfirmContainer
  from '../../containers/reset_password/confirm_container';

class ResetPasswordConfirm extends Component {
  static propTypes = {
    i18n: PropTypes.object.isRequired,
    requestParams: PropTypes.object.isRequired
  }

  static async getInitialProps(ctx) {
    const currentUser = getCurrentUser(
      ctx.store.getState()
    );

    if (currentUser.id) {
      return redirect(ctx, home);
    }

    return {
      requestParams: { recoveryToken: ctx.query.recoveryToken }
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

          <div className="page-container">
            <Header />

            <main className="login__container flex-grow-1">
              <div className="login__wrap">
                <Container>
                  <ResetPasswordConfirmContainer
                    requestParams={requestParams}
                  />

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

export default withReduxAndSaga(
  withTranslations('resetPassword', 'common')(ResetPasswordConfirm)
);
