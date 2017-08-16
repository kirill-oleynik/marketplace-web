import Head from 'next/head';
import { Container } from 'reactstrap';
import MainHeader from './../components/header';
import AllRights from './../components/all_rights';
import SignUpFormSecondStep from './../components/sign_up_form_second_step';

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
            <SignUpFormSecondStep />
            <AllRights />
          </Container>
        </div>
      </main>
    </div>
  </div>
);
