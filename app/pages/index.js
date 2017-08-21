import Head from 'next/head';
import { Container, Row, Col } from 'reactstrap';
import withRedux from 'next-redux-wrapper';
import MainFooter from './../components/footer';
import Header from './../containers/header_container';
import InputSearch from './../components/input_search';
import Categories from './../components/categories';
import CategoriesDropdown from './../components/categories_dropdown';
import AppBlock from './../components/app_block';
import AppBlockVertical from './../components/app_block_vertical';
import GoTopLink from './../components/go_top_link';
import initStore from './../store/init_store';

const Index = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className="page-container">
      <Header />
      <main className="flex-grow-1">
        <section className="home-header">
          <Container className="pb-50">
            <div className="home-header__content">
              <div className="mb-45">
                <h1 className="home-header__main-title">
                  Discover, Compare, and Choose the Best Business Apps
                </h1>

                <p className="home-header__descr">
                  Discover categories in order to find more than 100 resources to make your business
                </p>
              </div>
              <InputSearch />
            </div>
          </Container>
        </section>
        <section className="hidden-md-up">
          <CategoriesDropdown />
        </section>
        <Container>
          <section className="pt-30">
            <Row>
              <Col xs="12" md="4" className="hidden-sm-down">
                <Categories />
              </Col>
              <Col xs="12" md="8">
                <AppBlock />
                <div className="divider divider--dark mb-30" />
                <AppBlockVertical />
                <div className="divider divider--dark" />
              </Col>
            </Row>
          </section>
        </Container>
        <GoTopLink />
      </main>
      <MainFooter />
    </div>
  </div>
);

export default withRedux(initStore, null, {})(Index);
