import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ConfirmationModal from '../confirmation_modal';
import ApplicationPreview from '../applications/preview';

class FavoritesListItem extends Component {
  static propTypes = {
    favorite: PropTypes.object.isRequired,
    removeFromFavorites: PropTypes.func.isRequired
  }

  state = {
    isModalShown: false
  }

  removeFavorite = () => {
    const { favorite, removeFromFavorites } = this.props;

    removeFromFavorites(favorite);
  }

  handleRemoveClick = () => {
    this.setState({
      isModalShown: true
    });
  }

  handleModalCloseClick = () => {
    this.setState({
      isModalShown: false
    });
  }

  render() {
    const { favorite } = this.props;
    const { isModalShown } = this.state;

    return (
      <div>
        <ApplicationPreview
          remove
          application={favorite.application}
          onRemoveClick={this.handleRemoveClick}
        />

        <ConfirmationModal
          isOpen={isModalShown}
          action={this.removeFavorite}
          close={this.handleModalCloseClick}
        />
      </div>
    );
  }
}

export default FavoritesListItem;
