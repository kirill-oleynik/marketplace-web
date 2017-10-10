import React, { Component } from 'react';

import Footer from '../components/footer';
import TermsOfUse from '../components/terms_of_use';
import PrivacyPolicy from '../components/privacy_policy';

class FooterContainer extends Component {
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
    const { isTermsOfUseShown, isPrivacyPolicyShown } = this.state;

    return (
      <div>
        <Footer
          onTermsOfUseClick={this.handleTermsOfUseClick}
          onPrivacyPolicyClick={this.handlePrivacyPolicyClick}
        />

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
