import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { PrivacyPolicy } from 'app/components/privacy_policy';

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <PrivacyPolicy
        isOpen
        toggle={() => {}}
        t={(translation) => translation}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
