import React, { Component } from 'react';

import { getElementTop } from './helpers/dom_helpers';

function withFixedHeader(startElementSelector) {
  return (BaseComponent) => {
    class WithFixedHeader extends Component {
      state = {
        isFixed: false
      }

      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        window.scrollTo(window.scrollX, window.scrollY - 1);
        window.scrollTo(window.scrollX, window.scrollY + 1);
      }

      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }

      handleScroll = () => {
        const startElementNode = document.querySelector(startElementSelector);

        const offsetTop = getElementTop(startElementNode);

        if (window.scrollY >= offsetTop - 61) {
          this.setState({ isFixed: true });
        } else {
          this.setState({ isFixed: false });
        }
      }

      render() {
        return (
          <BaseComponent {...this.props} isHeaderFixed={this.state.isFixed} />
        );
      }
    }

    return WithFixedHeader;
  };
}

export default withFixedHeader;
