import React, { Component } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { translate } from 'react-i18next';
import Autosuggest from 'react-autosuggest';

import { home, search, applications as applicationsRoute } from '../routes';

const goToSearch = () => {
  Router.push(search);
};

const goToCategory = (category) => {
  const path = `${home}?category=${category.slug}`;

  Router.push(path, path, { shallow: true });
};

const goToApplication = (application) => {
  const asPath = `${applicationsRoute}/${application.slug}`;
  const path = {
    pathname: applicationsRoute,
    query: {
      slug: application.slug
    }
  };

  Router.push(path, asPath);
};

class Autocomplete extends Component {
  static ENTER_KEY = 13
  static CATEGORIES_INDEX = 1
  static APPLICATIONS_INDEX = 0
  static FOCUS_REASON = 'input-focused'
  static CHANGE_REASON = 'input-changed'

  constructor(props) {
    super(props);

    this.selected = false;
    this.debouncedFetch = debounce(props.fetch, 300);
  }

  state = {
    value: '',
    suggestions: []
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      suggestions: this.formatSuggestions(nextProps)
    });
  }

  getSuggestionValue = (suggestion) => suggestion.title

  getSectionSuggestions = (section) => section.suggestions

  clear = () => {
    this.setState({
      value: '',
      suggestions: []
    }, () => {
      this.selected = false;
    });
  }

  formatSuggestions = (props) => {
    const { t, categories, applications } = props || this.props;

    return [
      {
        title: t('search.applications'),
        suggestions: applications
      },
      {
        title: t('search.categories'),
        suggestions: categories
      }
    ];
  }

  handleChange = (_event, { newValue }) => {
    this.setState({
      value: newValue
    });
  }

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  }

  handleSuggestionsFetchRequested = ({ value, reason }) => {
    if (reason === this.constructor.CHANGE_REASON) {
      this.debouncedFetch(value);
    } else if (reason === this.constructor.FOCUS_REASON) {
      this.setState({
        suggestions: this.formatSuggestions()
      });
    }
  }

  handleSuggestionSelected = (event, { suggestion, sectionIndex }) => {
    switch (sectionIndex) {
      case this.constructor.CATEGORIES_INDEX:
        goToCategory(suggestion);
        break;
      case this.constructor.APPLICATIONS_INDEX:
        goToApplication(suggestion);
        break;
      default:
        break;
    }

    this.selected = true;
    this.clear();
  }

  handleKeyDown = (event) => {
    if (event.keyCode === this.constructor.ENTER_KEY && !this.selected) {
      goToSearch();
    }
  }

  renderSuggestion = (suggestion) => (
    <div>
      {suggestion.title}
    </div>
  )

  renderSectionTitle = (section) => (
    section.suggestions.length ? (
      <div>
        {section.title}
      </div>
    ) : null
  )

  render() {
    const { placeholder } = this.props;
    const { value, suggestions } = this.state;

    const inputProps = {
      value,
      placeholder,
      onChange: this.handleChange,
      onKeyDown: this.handleKeyDown
    };

    return (
      <div className="autocomplete">
        <Autosuggest
          multiSection
          inputProps={inputProps}
          suggestions={suggestions}
          focusInputOnSuggestionClick={false}
          renderSuggestion={this.renderSuggestion}
          renderSectionTitle={this.renderSectionTitle}
          getSuggestionValue={this.getSuggestionValue}
          getSectionSuggestions={this.getSectionSuggestions}
          onSuggestionSelected={this.handleSuggestionSelected}
          onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        />

        <i className="icon icon-search" />
      </div>
    );
  }
}

Autocomplete.propTypes = {
  placeholder: PropTypes.string,
  fetch: PropTypes.func.isRequired
};

Autocomplete.defaultProps = {
  placeholder: ''
};

export default translate(['common'])(Autocomplete);
