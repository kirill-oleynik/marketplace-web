import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

class CategoriesDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        className="main-dropdown categories__dropdown"
      >
        <DropdownToggle caret className={`main-dropdown__toggle categories__dropdown-btn categories__dropdown-btn--${this.props.color}`}>
          Categories
        </DropdownToggle>

        <DropdownMenu className="categories__dropdown-menu">
          <a href="/" className="categories-link">Portfolio Management</a>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

CategoriesDropdown.propTypes = {
  color: PropTypes.string.isRequired
};

CategoriesDropdown.defaultProps = {
  caret: false
};

export default CategoriesDropdown;
