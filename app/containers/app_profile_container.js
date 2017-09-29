import React from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import {
  addToFavorites, removeFromFavorites
} from '../actions/applications_actions';
import { createReview } from '../actions/reviews_actions';
import { getGallery } from '../selectors/application_selectors';
import {
  getAppProfile, getCanToggleFavorite, getAppRating
} from '../selectors/applications_selectors';

import AppProfile from '../components/applications/app_profile';
import CategoriesLinkList from '../components/categories/link_list';
import CategoriesContainer from '../containers/categories_container';
import RelatedCategoriesContainer from '../containers/related_categories_container';

const CategoriesLinkListContainer = CategoriesContainer(CategoriesLinkList);

const AppProfileContainer = (props) => (
  <Container>
    <section className="pt-60">
      <Row>
        <Col xs="12" sm="3" className="hidden-xs-down">
          <StickyContainer style={{ height: '100%' }}>
            <Sticky topOffset={-30}>
              {
                (stickyOptions) => (
                  <CategoriesLinkListContainer
                    stickyOptions={{
                      ...stickyOptions,
                      style: {
                        ...stickyOptions.style,
                        top: '30px',
                        zIndex: 2
                      }
                    }}
                  />
                )
              }
            </Sticky>
          </StickyContainer>
        </Col>

        <Col xs="12" sm="9">
          <AppProfile {...props} />
          <RelatedCategoriesContainer />
        </Col>
      </Row>
    </section>
  </Container>
);

const mapStateToProps = (state) => ({
  gallery: getGallery(state),
  appRating: getAppRating(state),
  appProfile: getAppProfile(state),
  canToggleFavorite: getCanToggleFavorite(state)
});

const mapDispatchToProps = {
  createReview,
  addToFavorites,
  removeFromFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AppProfileContainer
);
