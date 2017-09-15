import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import MainButton from '../main_button';
import AddToFavorites from '../add_to_favorites';
import Rating from '../rating';
import RatingMarks from '../rating_marks';
import ButtonWithIcon from '../button_with_icon';
import ImageGallerySlider from '../image_gallery';

export const AppProfile = ({ appProfile, t }) => (
  <div>
    <div className="d-flex flex-sm-wrap-down mb-50">
      <div>
        <span
          className="app-item__img app-item__img--md mr-40"
          style={{ backgroundImage: `url('${appProfile.logo}')` }}
        />
      </div>

      <div
        className="d-flex flex-wrap flex-grow-1 justify-content-between pt-15"
      >
        <div className="mb-30">
          <p className="font-24 font-700 mb-10">
            {appProfile.title}
          </p>

          <Rating className="mb-30" />

          <AddToFavorites />
        </div>

        <div>
          <MainButton
            color="blue"
            size="lg"
          >
            {t('appProfile.requestDemo')}
          </MainButton>
        </div>
      </div>
    </div>

    <div className="mb-20">
      <p className="font-20 font-700 mb-30">
        {t('appProfile.gallery.title')}
      </p>

      <div className="mb-30">
        <ImageGallerySlider />
      </div>

      <p className="font-20 font-700">
        {t('appProfile.description.title')}
      </p>

      <p className="in-black-050">
        {appProfile.description}
      </p>

      <ButtonWithIcon
        icon="arrow-down"
        text={t('appProfile.description.readMore')}
        className="mb-10"
      />
    </div>

    <div className="divider divider--dark mb-30" />

    <div>
      <p className="font-20 font-700">
        {t('appProfile.ratings.title')}
      </p>

      <div className="d-flex flex-wrap justify-content-between">
        <div className="mr-70">
          <p className="font-16 font-700 mb-20">
            {t('appProfile.ratings.avarage')}
          </p>

          <div className="d-flex mb-30">
            <div className="mr-25">
              <p className="font-54 lh-1-2 in-black-050 mb-10">
                4.2
              </p>

              <Rating className="rating--sm" />
            </div>

            <div>
              <RatingMarks />
            </div>
          </div>
        </div>

        <div>
          <p className="font-16 font-700 mb-20">
            {t('appProfile.ratings.submit')}
          </p>

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
      <p className="font-20 font-700">
        {t('appProfile.extra.title')}
      </p>

      <Row className="mb-15">
        {
          appProfile.founded ? (
            <Col xs="12" sm="6" md="4">
              <p className="font-16 font-700 mb-5">
                {t('appProfile.extra.founded')}
              </p>

              <p className="in-black-050">
                {appProfile.founded}
              </p>
            </Col>
          ) : null
        }

        {
          appProfile.email ? (
            <Col xs="12" sm="6" md="4">
              <p className="font-16 font-700 mb-5">
                {t('appProfile.extra.email')}
              </p>

              <p className="in-black-050">
                {appProfile.email}
              </p>
            </Col>
          ) : null
        }

        {
          appProfile.website ? (
            <Col xs="12" sm="6" md="4">
              <p className="font-16 font-700 mb-5">
                {t('appProfile.extra.website')}
              </p>

              <p className="in-black-050">
                {appProfile.website}
              </p>
            </Col>
          ) : null
        }

        {
          appProfile.phone ? (
            <Col xs="12" sm="6" md="4">
              <p className="font-16 font-700 mb-5">
                {t('appProfile.extra.phone')}
              </p>

              <p className="in-black-050">
                {appProfile.phone}
              </p>
            </Col>
          ) : null
        }

        {
          appProfile.address ? (
            <Col xs="12" sm="6" md="4">
              <p className="font-16 font-700 mb-5">
                {t('appProfile.extra.address')}
              </p>

              <p className="in-black-050">
                {appProfile.address}
              </p>
            </Col>
          ) : null
        }
      </Row>
    </div>
  </div>
);

AppProfile.propTypes = {
  appProfile: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default AppProfile;
