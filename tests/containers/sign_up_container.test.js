import React from 'react';

import renderer from 'react-test-renderer';

import { SignUpContainer } from 'app/containers/sign_up_container';

jest.mock('../../app/components/auth/sign_up_form', () => 'Form');
jest.mock('../../app/components/auth/log_in_with_linkedin', () => 'LogInWithLinkedin');

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <SignUpContainer
        errors={{}}
        signUp={() => {}}
        t={(translation) => translation}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
