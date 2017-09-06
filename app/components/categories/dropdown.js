import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

export class CategoriesDropdown extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    const { t, color, categories } = this.props;

    return (
      <Dropdown
        isOpen={isOpen}
        toggle={this.toggle}
        className="main-dropdown categories__dropdown"
      >
        <DropdownToggle
          caret
          className={classNames(
            'main-dropdown__toggle',
            'categories__dropdown-btn',
            `categories__dropdown-btn--${color}`
          )}
        >
          {t('categories')}
        </DropdownToggle>

        <DropdownMenu className="categories__dropdown-menu">
          {
            categories.map((category) => (
              <a key={category.id} href="/" className="categories-link">
                {category.title}
              </a>
            ))
          }
        </DropdownMenu>
      </Dropdown>
    );
  }
}

CategoriesDropdown.propTypes = {
  color: PropTypes.string,
  t: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

CategoriesDropdown.defaultProps = {
  color: ''
};

export default translate(['common'])(CategoriesDropdown);
