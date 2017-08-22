import Head from 'next/head';
import { Container } from 'reactstrap';
import withRedux from 'next-redux-wrapper';
import Header from './../containers/header_container';
import AllRights from './../components/all_rights';
import ResetPasswordForm from './../components/auth/reset_password_form';
import initStore from './../store/init_store';

const ResetPassword = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className="page-container">
      <Header />
      <main className="login__container flex-grow-1">
        <div className="login__wrap">
          <Container>
            <ResetPasswordForm />
            <AllRights />
          </Container>
        </div>
      </main>
    </div>
  </div>
);

export default withRedux(initStore, null, {})(ResetPassword);
