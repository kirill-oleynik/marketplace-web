import { PropTypes } from 'react'
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
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="main-dropdown categories__dropdown">
        <DropdownToggle  className={`main-dropdown__toggle categories__dropdown-btn categories__dropdown-btn--${this.props.color}`} caret>
          Categories
        </DropdownToggle>
        <DropdownMenu className="categories__dropdown-menu">
          <a href="/" className="categories-link">Portfolio Management</a>
        </DropdownMenu>
      </Dropdown>
    )
  }
}

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  color: PropTypes.string
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  className: PropTypes.string,
};

export default CategoriesDropdown
