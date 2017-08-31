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
      <footer>
        <Container>
          <div className="main-footer main-footer-js">
            <div className="main-footer__wrap">
              <a href="/" className="page-main-logo in-blue-500">Appreview</a>
              <p className="font-14 in-black-035 ml-10 mb-0">©2017 All Rights Reserved</p>
            </div>
            <div className="main-footer__wrap">
              <a href="/" className="main-footer__link">Terms of Use</a>
              <a href="/" className="main-footer__link">Privacy Policy</a>
            </div>
          </div>
        </Container>
      </footer>
    );
  }
}

export default MainFooter;
