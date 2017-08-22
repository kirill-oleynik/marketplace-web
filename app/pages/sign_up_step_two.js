import Head from 'next/head';
import { Container } from 'reactstrap';
import withRedux from 'next-redux-wrapper';
import initStore from './../store/init_store';
import Header from './../containers/header_container';
import AllRights from './../components/all_rights';
import SignUpFormSecondStep from './../components/auth/sign_up_form_second_step';

const SignUpStepTwo = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className="page-container">
      <Header />
      <main className="login__container flex-grow-1">
        <div className="login__wrap">
          <Container>
            <SignUpFormSecondStep />
            <AllRights />
          </Container>
        </div>
      </main>
    </div>
  </div>
);

export default withRedux(initStore, null, {})(SignUpStepTwo);
