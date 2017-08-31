import React from 'react';

const InputSearch = ({ ...rest }) => (
  <div className="input-search">
    <input className="input-search__input" placeholder="Search App and Categories" {...rest} />
    <i className="input-search__icon icon icon-search" />
  </div>
);

InputSearch.defaultProps = {
  type: 'text'
};

export default InputSearch;
