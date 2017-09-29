import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import redirect from 'next-redirect';
import { Container } from 'reactstrap';
import { I18nextProvider } from 'react-i18next';
import { home } from '../../routes';
import createI18n from '../../services/i18n';
import { getTranslations } from '../../services/api';
import { getCurrentUser } from '../../selectors/current_user_selectors';
import Header from '../../containers/header_container';
import AllRights from '../../components/all_rights';
import withReduxAndSaga from '../../store';
import ResetPasswordConfirmContainer
  from '../../containers/reset_password/confirm_container';

class ResetPasswordConfirm extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired,
    requestParams: PropTypes.object.isRequired
  }

  static async getInitialProps(ctx) {
    const currentUser = getCurrentUser(
      ctx.store.getState()
    );

    if (currentUser.id) {
      return redirect(ctx, home);
    }

    const commonTranslations = await getTranslations('common');
    const resetPasswordTranslations = await getTranslations('reset_password');

    return {
      translations: { ...commonTranslations, ...resetPasswordTranslations },
      requestParams: { recoveryToken: ctx.query.recoveryToken }
    };
  }

  constructor(props) {
    super(props);

    this.i18n = createI18n(props.translations);
  }

  render() {
    const { requestParams } = this.props;

    return (
      <I18nextProvider i18n={this.i18n}>
        <div>
          <Head>
            <title>
              {this.i18n.t('resetPassword:title')}
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

export default withReduxAndSaga(ResetPasswordConfirm);
