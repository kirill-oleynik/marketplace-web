import React from 'react';

import PropTypes from 'prop-types';
import MainButton from './../components/main_button';

const MessageBlock = ({ image }) => (
  <div className="mb-60">
    <h3 className="font-20 font-700 mb-30">Favorites</h3>
    <div className="message-block">
      <img
        className="message-block__img"
        src={`static/images/${image}.png`}
        srcSet={`static/images/${image}@2x.png 2x, static/images/${image}@3x.png 3x`}
        alt=""
      />
      <p className="font-14 mb-30">Your Favourites list will live here. To add applications to your Favourites, tap the heart button after opening a Profile  application page.</p>
      <MainButton size="md" color="blue">Go to Apps</MainButton>
    </div>
  </div>
);

MessageBlock.propTypes = {
  image: PropTypes.string
};

MessageBlock.defaultProps = {
  image: ''
};

export default MessageBlock;
