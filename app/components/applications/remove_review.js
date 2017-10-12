import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import ButtonWithIcon from '../button_with_icon';
import ConfirmationModal from '../confirmation_modal';

export class RemoveReview extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    review: PropTypes.object.isRequired,
    deleteReview: PropTypes.func.isRequired,
    application: PropTypes.object.isRequired
  }

  state = {
    isModalShown: false
  }

  removeReview = () => {
    const { review, application, deleteReview } = this.props;

    deleteReview(review, application);
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
    const { t } = this.props;
    const { isModalShown } = this.state;

    return (
      <div className="application__remove-review">
        <ButtonWithIcon
          icon="cross"
          onClick={this.handleRemoveClick}
          text={t('appProfile.ratings.remove')}
          className="application__remove-review__link"
        />

        <ConfirmationModal
          isOpen={isModalShown}
          action={this.removeReview}
          close={this.handleModalCloseClick}
        />
      </div>
    );
  }
}

export default translate(['applications'])(RemoveReview);
