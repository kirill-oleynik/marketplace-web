import React from 'react';
import { Container } from 'reactstrap';

class MainFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
        <footer className="main-footer main-footer-js">
          <div className="main-footer__wrap">
            <a href="/" className="page-main-logo in-blue-500">Application</a>
            <p className="font-12 in-black-035 ml-10 mb-10">©2017 All Rights Reserved</p>
          </div>
          <div className="main-footer__wrap">
            <a href="/" className="main-footer__link">Terms of Use</a>
            <a href="/" className="main-footer__link">Privacy Policy</a>
          </div>
        </footer>
      </Container>
    );
  }
}

export default MainFooter;
