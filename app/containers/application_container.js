import React from 'react';

import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Sticky, StickyContainer } from 'react-sticky';

import { getGallery } from '../selectors/application_selectors';
import { createReview, deleteReview } from '../actions/reviews_actions';
import { addToFavorites, removeFromFavorites } from '../actions/applications_actions';
import {
  getAppProfile, getCanToggleFavorite, getAppRating
} from '../selectors/applications_selectors';

import Application from '../components/applications/application';
import CategoriesLinkList from '../components/categories/link_list';
import CategoriesContainer from '../containers/categories_container';
import RelatedCategoriesContainer from '../containers/related_categories_container';

const CategoriesLinkListContainer = CategoriesContainer(CategoriesLinkList);

const ApplicationContainer = (props) => (
  <Container>
    <section className="pt-60">
      <Row>
        <Col xs="12" sm="3" className="hidden-xs-down">
          <StickyContainer style={{ height: '100%' }}>
            <Sticky topOffset={-60}>
              {
                (stickyOptions) => (
                  <CategoriesLinkListContainer
                    stickyOptions={{
                      ...stickyOptions,
                      style: {
                        ...stickyOptions.style,
                        top: '61px',
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
          <Application {...props} />
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
  deleteReview,
  addToFavorites,
  removeFromFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ApplicationContainer
);
