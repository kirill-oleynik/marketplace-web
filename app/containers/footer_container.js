import React, { Component } from 'react';

import PropTypes from 'prop-types';

import TermsOfUse from '../components/terms_of_use';
import PrivacyPolicy from '../components/privacy_policy';

class FooterContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = {
    isTermsOfUseShown: false,
    isPrivacyPolicyShown: false
  }

  handleTermsOfUseClick = () => {
    this.setState({
      isTermsOfUseShown: !this.state.isTermsOfUseShown
    });
  }

  handlePrivacyPolicyClick = () => {
    this.setState({
      isPrivacyPolicyShown: !this.state.isPrivacyPolicyShown
    });
  }

  render() {
    const { children } = this.props;
    const { isTermsOfUseShown, isPrivacyPolicyShown } = this.state;

    return (
      <div>
        {
          React.cloneElement(children, {
            onTermsOfUseClick: this.handleTermsOfUseClick,
            onPrivacyPolicyClick: this.handlePrivacyPolicyClick
          })
        }

        <TermsOfUse
          isOpen={isTermsOfUseShown}
          toggle={this.handleTermsOfUseClick}
        />

        <PrivacyPolicy
          isOpen={isPrivacyPolicyShown}
          toggle={this.handlePrivacyPolicyClick}
        />
      </div>
    );
  }
}

export default FooterContainer;
