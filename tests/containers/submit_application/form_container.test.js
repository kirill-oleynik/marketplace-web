import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import SubmitApplicationFormContainer from 'app/containers/submit_application/form_container';

const fakeStore = (state = {}) => ({
  subscribe() {},
  dispatch() {},
  getState() { return state; }
});

const submitApplication = {
  errors: {}
};

describe('#render', () => {
  test('it renders correctly', () => {
    const store = fakeStore({
      submitApplication
    });

    const component = shallow(
      <SubmitApplicationFormContainer
        t={(translate) => translate}
        submitApplication={() => {}}
        toggleSubmitApplicationModal={() => {}}
      />,
      { context: { store } }
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
