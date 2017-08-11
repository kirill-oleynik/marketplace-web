import Head from 'next/head';
import { Container, Row, Col } from 'reactstrap';
import MainHeader from './../components/header';
import InputSearch from './../components/input_search';

export default () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className="page-container">
      <MainHeader />
      <main className="flex-grow-1">
        <section className="home-header">
          <Container className="pb-50">
            <div className="home-header__content">
              <h1 className="home-header__main-title">Discover, Compare, and Choose the Best Business Apps</h1>
              <p className="home-header__descr">Discover categories in order to find more than 100 resources to make your business</p>
              <InputSearch />
            </div>
          </Container>
        </section>
      </main>
    </div>
  </div>
);
