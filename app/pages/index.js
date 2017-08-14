import Head from 'next/head';
import { Container, Row, Col } from 'reactstrap';
import MainHeader from './../components/header';
import InputSearch from './../components/input_search';
import Categories from './../components/categories';
import CategoriesDropdown from './../components/categories_dropdown';

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
              <h1 className="home-header__main-title">
                Discover, Compare, and Choose the Best Business Apps
              </h1>

              <p className="home-header__descr">
                Discover categories in order to find more than 100 resources to make your business
              </p>

              <InputSearch />
            </div>
          </Container>
        </section>
        <section className="hidden-md-up">
          <CategoriesDropdown />
        </section>
        <Container>
          <section className="home-content">
            <Row>
              <Col xs="12" md="4" className="hidden-sm-down">
                <Categories />
              </Col>
              <Col xs="12" md="8">
                <div>
                  <h3>Research</h3>
                  <p>Organize, manage, and track your project with tools that build on top of issues and pull requests</p>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </main>
    </div>
  </div>
);
