import Head from 'next/head';
import { Container } from 'reactstrap';
import withRedux from 'next-redux-wrapper';
import MainHeader from './../components/header';
import AllRights from './../components/all_rights';
import ResetPasswordForm from './../components/reset_password_form';
import initStore from './../store/init_store';

const ResetPassword = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className="page-container">
      <MainHeader />
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
