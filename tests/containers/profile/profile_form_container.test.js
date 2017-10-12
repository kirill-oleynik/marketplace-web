import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { ProfileFormContainer } from 'app/containers/profile/profile_form_container';

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <ProfileFormContainer
        currentUser={{}}
        errors={{}}
        t={() => {}}
        updateProfile={() => {}}
      />
    );

    expect(toJSON(component)).toMatchSnapshot();
  });
});
