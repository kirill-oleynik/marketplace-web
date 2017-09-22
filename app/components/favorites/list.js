import React, { Component } from 'react';
import take from 'lodash/take';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { translate } from 'react-i18next';

import FavoritesListItem from './list_item';
import ButtonWithIcon from '../button_with_icon';

const EXPAND_LIMIT = 4;

export class FavoritesList extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    favorites: PropTypes.array.isRequired,
    removeFromFavorites: PropTypes.func.isRequired
  }

  state = {
    isExpanded: false
  }

  favoritesToShow = () => {
    const { favorites } = this.props;
    const { isExpanded } = this.state;

    return isExpanded ? favorites : take(favorites, EXPAND_LIMIT);
  }

  handleExpandClick = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render() {
    const { isExpanded } = this.state;
    const { t, favorites, removeFromFavorites } = this.props;

    return (
      <div>
        <Row>
          {
            this.favoritesToShow().map((favorite) => (
              <Col key={favorite.id} xs="12" sm="6">
                <FavoritesListItem
                  favorite={favorite}
                  removeFromFavorites={removeFromFavorites}
                />
              </Col>
            ))
          }
        </Row>

        {
          favorites.length > EXPAND_LIMIT ? (
            <div className="text-center text-md-left">
              <ButtonWithIcon
                className="mb-10"
                onClick={this.handleExpandClick}
                icon={isExpanded ? 'arrow-up' : 'arrow-down'}
                text={isExpanded ? t('showLess') : t('showMore')}
              />
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default translate(['favorites'])(FavoritesList);
