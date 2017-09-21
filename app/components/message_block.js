import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MainButton from './../components/main_button';

const MessageBlock = ({ image, imageSize }) => (
  <div className="message-block">
    <img
      className={classNames('message-block__img', `message-block__img--${imageSize}`)}
      src={`static/images/${image}.png`}
      srcSet={`static/images/${image}@2x.png 2x, static/images/${image}@3x.png 3x`}
      alt=""
    />
    <p className="font-24 mb-10">We sincerely apologize..</p>
    <p className="font-14 mb-30">Your Favourites list will live here. To add applications to your Favourites, tap the heart button after opening a Profile  application page.</p>
    <MainButton size="md" color="blue">Go to Apps</MainButton>
  </div>
);

MessageBlock.propTypes = {
  image: PropTypes.string,
  imageSize: PropTypes.string
};

MessageBlock.defaultProps = {
  image: '',
  imageSize: ''
};

export default MessageBlock;
