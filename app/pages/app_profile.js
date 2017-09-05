import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container, Row, Col } from 'reactstrap';
import { I18nextProvider } from 'react-i18next';
import createI18n from '../services/i18n';
import { getTranslations } from '../services/api';
import MainFooter from '../components/footer';
import Header from '../containers/header_container';
import CategoriesDropdown from '../components/categories_dropdown';
import Categories from '../components/categories';
import AppBlockVertical from '../components/app_block_vertical';
import GoTopLink from '../components/go_top_link';
import withReduxAndSaga from '../store';
import MainButton from '../components/main_button';
import AddToFavorites from '../components/add_to_favorites';
import Rating from '../components/rating';
import RatingMarks from '../components/rating_marks';
import ButtonLinkWithIcon from '../components/button_link_with_icon';
import ImageGallerySlider from '../components/image_gallery';

const appProfileLogo = {
  backgroundImage: "url('http://www.geolog.com/files/img/SWN-logo.png')"
};

class AppProfile extends Component {
  static propTypes = {
    translations: PropTypes.object.isRequired
  }

  static async getInitialProps() {
    const commonTranslations = await getTranslations('common');

    return {
      translations: { ...commonTranslations }
    };
  }

  constructor(props) {
    super(props);

    this.i18n = createI18n(props.translations);
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <div>
          <Head>
            <title>App profile</title>
          </Head>

          <div className="page-container">
            <Header />
            <main className="flex-grow-1">
              <section className="hidden-sm-up">
                <CategoriesDropdown />
              </section>
              <Container>
                <section className="pt-60">
                  <Row>
                    <Col xs="12" sm="3" className="hidden-xs-down">
                      <Categories />
                    </Col>
                    <Col xs="12" sm="9">
                      <div className="d-flex flex-sm-wrap-down mb-50">
                        <div>
                          <span className="app-item__img app-item__img--md mr-40" style={appProfileLogo} />
                        </div>
                        <div className="d-flex flex-wrap flex-grow-1 justify-content-between pt-15">
                          <div className="mb-30">
                            <p className="font-24 font-700 mb-10">Research Methodology</p>
                            <Rating className="mb-30" />
                            <AddToFavorites />
                          </div>
                          <div>
                            <MainButton color="blue" size="lg">Reques Demo</MainButton>
                          </div>
                        </div>
                      </div>
                      <div className="mb-20">
                        <p className="font-20 font-700 mb-30">Screenshots and Videos</p>
                        <div className="mb-30">
                          <ImageGallerySlider />
                        </div>
                        <p className="font-20 font-700">About</p>
                        <p className="in-black-050">Search Metodology is the only project management tool that integrates natively within GitHub’s user interface. No lengthy onboarding. No configuration headaches. No separate logins. Developers stay in an environment they love, and Project Managers get total visibility into the development process.</p>
                        <ButtonLinkWithIcon
                          href="/"
                          icon="arrow-down"
                          text="Read More"
                          className="mb-10"
                        />
                      </div>
                      <div className="divider divider--dark mb-30" />
                      <div>
                        <p className="font-20 font-700">Customer Ratings</p>
                        <div className="d-flex flex-wrap justify-content-between">
                          <div className="mr-70">
                            <p className="font-16 font-700 mb-20">Average Rating</p>
                            <div className="d-flex mb-30">
                              <div className="mr-25">
                                <p className="font-54 lh-1-2 in-black-050 mb-10">4.2</p>
                                <Rating className="rating--sm" />
                              </div>
                              <div>
                                <RatingMarks />
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="font-16 font-700 mb-20">Click to Rate</p>
                            <div className="rating__stars">
                              <i className="rating__stars-item icon icon-star" />
                              <i className="rating__stars-item icon icon-star" />
                              <i className="rating__stars-item icon icon-star" />
                              <i className="rating__stars-item icon icon-star" />
                              <i className="rating__stars-item icon icon-star" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divider divider--dark mb-30" />
                      <div>
                        <p className="font-20 font-700">Additional Information</p>
                        <Row className="mb-15">
                          <Col xs="12" sm="6" md="4">
                            <p className="font-16 font-700 mb-5">Founded</p>
                            <p className="in-black-050">July 06, 2017</p>
                          </Col>
                          <Col xs="12" sm="6" md="4">
                            <p className="font-16 font-700 mb-5">Email</p>
                            <p className="in-black-050">researchmeth@example.com</p>
                          </Col>
                          <Col xs="12" sm="6" md="4">
                            <p className="font-16 font-700 mb-5">Website</p>
                            <p className="in-black-050">www.researchmeth.com</p>
                          </Col>
                          <Col xs="12" sm="6" md="4">
                            <p className="font-16 font-700 mb-5">Phone</p>
                            <p className="in-black-050">(354) 356-32-00</p>
                          </Col>
                          <Col xs="12" sm="6" md="4">
                            <p className="font-16 font-700 mb-5">Address</p>
                            <p className="in-black-050">711-2880 Nulla St.Mankato Mississippi 96522</p>
                          </Col>
                        </Row>
                      </div>
                      <div className="divider divider--dark mb-30" />
                      <AppBlockVertical />
                    </Col>
                  </Row>
                </section>
              </Container>
              <GoTopLink />
            </main>
            <MainFooter />
          </div>
        </div>
      </I18nextProvider>
    );
  }
}

export default withReduxAndSaga(AppProfile);
