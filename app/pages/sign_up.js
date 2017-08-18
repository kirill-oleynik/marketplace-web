import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import initStore from './../store/init_store';
import AuthLayout from './../layouts/auth_layout';
import SignUpForm from './../components/sign_up_form';

const SignUp = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  </div>
);

export default withRedux(initStore, null, {})(SignUp);
