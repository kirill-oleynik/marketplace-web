import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { translate } from 'react-i18next';

import { asFoundedDate } from '../../helpers/dates_helpers';
import {
  truncateParagraph, humanizeUrl, emailLink, phoneLink
} from '../../helpers/text_helpers';

import MainButton from '../main_button';
import RemoveReview from './remove_review';
import SubmitReview from './submit_review';
import ApplicationGallery from './gallery';
import RatingPreview from './rating_preview';
import ToggleFavorite from './toggle_favorite';
import ButtonWithIcon from '../button_with_icon';
import ApplicationRating from './application_rating';

export class Application extends Component {
  state = {
    descriptionTruncated: true
  };

  setDescriptionTruncated = (flag) => (
    this.setState({
      descriptionTruncated: flag
    })
  );

  getDescriptionLength = () => {
    if (this.descriptionStandardLength()) {
      return this.descriptionLength();
    }

    return this.state.descriptionTruncated ? 500 : this.descriptionLength();
  }

  descriptionLength = () => {
    const { appProfile: { description } } = this.props;
    return description && description.length;
  };

  descriptionStandardLength = () => this.descriptionLength() < 500;

  needToShowMoreDescription = () => (
    this.descriptionStandardLength() ? false : this.state.descriptionTruncated
  );

  needToShowLessDescription = () => (
    this.descriptionStandardLength() ? false : !this.state.descriptionTruncated
  );

  showLessDescription = () => this.setDescriptionTruncated(true);
  showMoreDescription = () => this.setDescriptionTruncated(false);

  submitApplicationReview = (reviewValue) => (
    this.props.createReview({
      applicationId: this.props.appProfile.id,
      value: reviewValue,
      slug: this.props.appProfile.slug
    })
  );

  render() {
    const {
      t, appProfile, gallery, canToggleFavorite, deleteReview,
      addToFavorites, removeFromFavorites, appRating
    } = this.props;

    return (
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

              <RatingPreview
                t={t}
                total={appRating.total}
                average={appRating.average}
                className="mb-30"
              />

              <ToggleFavorite
                application={appProfile}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                disabled={!canToggleFavorite}
              />
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

          {
            gallery.slides && gallery.slides.length ? (
              <div className="mb-30">
                <ApplicationGallery
                  slides={gallery.slides}
                />
              </div>
            ) : null
          }

          <p className="font-20 font-700">
            {t('appProfile.description.title')}
          </p>

          <p className="in-black-050">
            {
              truncateParagraph(
                appProfile.description,
                this.getDescriptionLength()
              )
            }
          </p>

          {
            this.needToShowMoreDescription() ? (
              <ButtonWithIcon
                icon="arrow-down"
                text={t('appProfile.description.readMore')}
                className="mb-10"
                onClick={this.showMoreDescription}
              />
            ) : null
          }

          {
            this.needToShowLessDescription() ? (
              <ButtonWithIcon
                icon="arrow-up"
                text={t('appProfile.description.readLess')}
                className="mb-10"
                onClick={this.showLessDescription}
              />
            ) : null
          }
        </div>

        <div className="divider divider--dark mb-30" />

        <div>
          <p className="font-20 font-700">
            {t('appProfile.ratings.title')}
          </p>

          <div className="d-flex flex-wrap justify-content-between">
            <ApplicationRating
              t={t}
              data={appRating}
            />
            <div>
              <SubmitReview
                review={appProfile.review || undefined}
                onSubmit={this.submitApplicationReview}
              />

              {
                appProfile.review ? (
                  <RemoveReview
                    application={appProfile}
                    review={appProfile.review}
                    deleteReview={deleteReview}
                  />
                ) : null
              }
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
                    {asFoundedDate(appProfile.founded)}
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

                  <a
                    href={emailLink(appProfile.email)}
                    className="in-black-050"
                  >
                    {appProfile.email}
                  </a>
                </Col>
              ) : null
            }

            {
              appProfile.website ? (
                <Col xs="12" sm="6" md="4">
                  <p className="font-16 font-700 mb-5">
                    {t('appProfile.extra.website')}
                  </p>

                  <a
                    href={appProfile.website}
                    target="_blank"
                    className="in-black-050"
                  >
                    {humanizeUrl(appProfile.website)}
                  </a>
                </Col>
              ) : null
            }

            {
              appProfile.phone ? (
                <Col xs="12" sm="6" md="4">
                  <p className="font-16 font-700 mb-5">
                    {t('appProfile.extra.phone')}
                  </p>

                  <a
                    href={phoneLink(appProfile.phone)}
                    className="in-black-050"
                  >
                    {appProfile.phone}
                  </a>
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
  }
}

Application.propTypes = {
  t: PropTypes.func.isRequired,
  gallery: PropTypes.object.isRequired,
  appProfile: PropTypes.object.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
  canToggleFavorite: PropTypes.bool.isRequired,
  createReview: PropTypes.func.isRequired,
  deleteReview: PropTypes.func.isRequired,
  appRating: PropTypes.object.isRequired
};

export default translate(['applications'])(Application);
