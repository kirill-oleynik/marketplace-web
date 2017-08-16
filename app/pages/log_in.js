import Head from 'next/head';
import { Container } from 'reactstrap';
import MainHeader from './../components/header';
import LogInForm from './../components/log_in_form';
import AllRights from './../components/all_rights';


export default () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className="page-container">
      <MainHeader />
      <main className="flex-grow-1">
        <Container className="pt-40">
          <div className="login__wrap">
            <LogInForm />
            <AllRights />
          </div>
        </Container>
      </main>
    </div>
  </div>
);
