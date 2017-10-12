import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ResetPasswordRequestContainer from 'app/containers/reset_password/request_container';

const fakeStore = (state = {}) => ({
  subscribe() {},
  dispatch() {},
  getState() { return state; }
});

const resetPassword = {
  errors: {}
};

describe('#render', () => {
  test('it renders correctly', () => {
    const store = fakeStore({
      resetPassword
    });

    const component = shallow(
      <ResetPasswordRequestContainer
        t={(translate) => translate}
        resetPasswordRequest={() => {}}
        handleFormCancel={() => {}}
      />,
      { context: { store } }
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
