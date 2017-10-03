import React, { Component } from 'react';

import Footer from '../components/footer';
import TermsOfUse from '../components/terms_of_use';

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
    const { isTermsOfUseShown } = this.state;

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
      </div>
    );
  }
}

export default FooterContainer;
