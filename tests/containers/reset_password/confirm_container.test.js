import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ResetPasswordConfirmContainer from 'app/containers/reset_password/confirm_container';

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
      <ResetPasswordConfirmContainer
        t={(translate) => translate}
        resetPasswordConfirm={() => {}}
        handleFormCancel={() => {}}
      />,
      { context: { store } }
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
