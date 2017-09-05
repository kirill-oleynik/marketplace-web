const React = require('react');
const renderer = require('react-test-renderer');
const { SignInContainer } = require('../../app/containers/sign_in_container');

jest.mock('../../app/components/auth/sign_in_form', () => 'Form');

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
