import React, { Component } from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';

import withReduxAndSaga from '../store';
import withTranslations from '../with_translations';
import { load } from '../actions/page_actions';

import AuthLayout from '../layouts/auth_layout';
import AddExtraInfoContainer from '../containers/add_extra_info_container';

class AddExtraInfo extends Component {
  static propTypes = {
    i18n: PropTypes.object.isRequired
  }

  static async getInitialProps({ store, ...rest }) {
    store.dispatch(
      load({
        name: 'add_extra_info',
        context: rest
      })
    );
  }

  render() {
    const { i18n } = this.props;

    return (
      <I18nextProvider i18n={this.props.i18n}>
        <div>
          <Head>
            <title>
              {i18n.t('addExtraInfo:title')}
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

export default withReduxAndSaga(
  withTranslations('common', 'addExtraInfo')(AddExtraInfo)
);
