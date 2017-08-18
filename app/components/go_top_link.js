import React from 'react';
import { Container } from 'reactstrap';
import ButtonCircle from './../components/button_circle';

class GoTopLink extends React.Component {
  constructor(props) {
    super(props);

    this.position = this.position.bind(this);
    this.state = {
      delta: 0,
      visible: false
    };
  }

  componentDidMount() {
    this.mainFooter = document.querySelector('.main-footer-js');
    window.addEventListener('scroll', this.position);
    window.addEventListener('resize', this.position);
    this.position();
  }

  position() {
    const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
    const delta = Math.max(0, viewportHeight - this.mainFooter.getBoundingClientRect().top);
    this.setState({
      delta,
      visible: true
    });
  }

  render() {
    return (
      <div className="go-top-link" style={{ bottom: this.state.delta, visibility: this.state.visible ? 'visible' : 'hidden' }}>
        <Container className="text-right">
          <ButtonCircle
            type="button"
            icon="arrow-up"
            color="grey"
            className="in-blue-500 mb-40"
          />
        </Container>
      </div>
    );
  }
}

export default GoTopLink;
