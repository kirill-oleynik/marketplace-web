import React from 'react';
import ButtonCircle from './../components/button_circle';

class GoTopLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  render() {
    return (
      <div className="go-top-link">
        <ButtonCircle
          type="button"
          icon="arrow-up"s
          color="grey"
          className="in-blue-500"
        />
      </div>
    );
  }
}

export default GoTopLink;
