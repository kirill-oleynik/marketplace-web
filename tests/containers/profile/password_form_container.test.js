import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { PasswordFormContainer } from 'app/containers/profile/password_form_container';

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <PasswordFormContainer
        errors={{}}
        t={() => {}}
        updatePassword={() => {}}
      />
    );

    expect(toJSON(component)).toMatchSnapshot();
  });
});
