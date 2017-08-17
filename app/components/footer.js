import React from 'react';
import { Container } from 'reactstrap';
// import MainButton from './main_button';
import ButtonCircle from './button_circle';
import HeaderModalMenu from './header_modal_menu';
import HeaderDropdownMenu from './header_dropdown_menu';

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
    <footer className="main-header">
      <Container>
        <div className="main-header__content">
        <Row>
        <Col xs="12">
          <a href="/" className="main-header__main-logo">Application</a>
        </Col>
        <Col xs="12">

        </Col>
        </Row>
        </div>
      </Container>
    </footer>
    );
  }
}

export default MainFooter;
