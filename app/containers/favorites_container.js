import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { Sticky, StickyContainer } from 'react-sticky';

import {
  removeFromFavorites as removeFromFavoritesAction
} from '../actions/applications_actions';
import { getFavoritesWithApplications } from '../selectors/favorites_selectors';

import CategoriesContainer from './categories_container';
import FavoritesList from '../components/favorites/list';
import EmptyFavorites from '../components/favorites/empty';
import CategoriesDropdown from '../components/categories/dropdown';
import CategoriesLinkList from '../components/categories/link_list';

const CategoriesDropdownContainer = CategoriesContainer(CategoriesDropdown);
const CategoriesLinkListContainer = CategoriesContainer(CategoriesLinkList);

const FavoritesContainer = ({ t, favorites, removeFromFavorites }) => (
  <main className="flex-grow-1">
    <section className="hidden-sm-up">
      <CategoriesDropdownContainer />
    </section>

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
            <h3 className="font-20 font-700 mb-10">{t('title')}</h3>

            {
              favorites.length ? (
                <div>
                  <p className="mb-30">{t('description')}</p>

                  <FavoritesList
                    favorites={favorites}
                    removeFromFavorites={removeFromFavorites}
                  />
                </div>
              ) : (
                <EmptyFavorites />
              )
            }
          </Col>
        </Row>
      </section>
    </Container>
  </main>
);

FavoritesContainer.propTypes = {
  t: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  removeFromFavorites: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  favorites: getFavoritesWithApplications(state)
});

const mapDispatchToProps = {
  removeFromFavorites: removeFromFavoritesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(
  translate(['favorites'])(FavoritesContainer)
);
