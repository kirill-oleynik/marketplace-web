import React, { Component } from 'react';
import classNames from 'classnames';

import { scrollToElement } from '../helpers/dom_helpers';

import ButtonCircle from './button_circle';

class ScrollTopButton extends Component {
  static FADE_IN_SCROLL_LIMIT = 500

  state = {
    isShown: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    window.scrollTo(window.scrollX, window.scrollY - 1);
    window.scrollTo(window.scrollX, window.scrollY + 1);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleClick = () => {
    scrollToElement(document.body);
  }

  handleScroll = () => {
    if (window.scrollY >= this.constructor.FADE_IN_SCROLL_LIMIT) {
      this.setState({ isShown: true });
    } else {
      this.setState({ isShown: false });
    }
  }

  render() {
    const { isShown } = this.state;

    return (
      <div
        className={classNames(
          'scroll-top',
          { 'fade-in': isShown },
          { 'fade-out': !isShown }
        )}
      >
        <ButtonCircle
          color="grey"
          icon="arrow-up"
          disabled={!isShown}
          onClick={this.handleClick}
          className="in-blue-500 scroll-top__button"
        />
      </div>
    );
  }
}

export default ScrollTopButton;
