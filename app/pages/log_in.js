import Head from 'next/head';
import { Container } from 'reactstrap';
import MainHeader from './../components/header';
import AllRights from './../components/all_rights';
import ResetPasswordForm from './../components/reset_password_form';
// import SignUpForm from './../components/sign_up_form';
// import LogInForm from './../components/log_in_form';


export default () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className="page-container">
      <MainHeader />
      <main className="login__container flex-grow-1">
        <div className="login__wrap">
          <Container>
            {/* <LogInForm /> */}
            {/* <SignUpForm /> */}
            <ResetPasswordForm />
            <AllRights />
          </Container>
        </div>
      </main>
    </div>
  </div>
);
