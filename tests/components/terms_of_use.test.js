import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { TermsOfUse } from 'app/components/terms_of_use';

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <TermsOfUse
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
