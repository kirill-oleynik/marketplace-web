import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import SubmitApplicationModalContainer from 'app/containers/submit_application/modal_container';

const fakeStore = (state = {}) => ({
  subscribe() {},
  dispatch() {},
  getState() { return state; }
});

const submitApplication = {
  modalIsActive: false,
  errors: {}
}

describe('#render', () => {
  test('it renders correctly', () => {
    const store = fakeStore({
      submitApplication
    });

    const component = shallow(
      <SubmitApplicationModalContainer />,
      { context: { store } }
    )

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
