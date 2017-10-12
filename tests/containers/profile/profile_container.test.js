import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { ProfileContainer } from 'app/containers/profile/profile_container';

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <ProfileContainer
        t={() => {}}
        currentUser={{}}
        profileModalActive={false}
        toggleProfileModal={() => {}}
      />
    );

    expect(toJSON(component)).toMatchSnapshot();
  });
});
