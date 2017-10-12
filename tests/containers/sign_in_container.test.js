import React from 'react';

import renderer from 'react-test-renderer';

import { SignInContainer } from 'app/containers/sign_in_container';

jest.mock('../../app/components/auth/sign_in_form', () => 'Form');
jest.mock('../../app/components/auth/log_in_with_linkedin', () => 'LogInWithLinkedin');

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <SignInContainer
        errors={{}}
        signIn={() => {}}
        t={(translation) => translation}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
