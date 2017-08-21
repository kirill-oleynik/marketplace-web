const React = require('react');
const renderer = require('react-test-renderer');
const { SignUpContainer } = require('../../app/containers/sign_up_container');

jest.mock('../../app/components/sign_up_form', () => 'Form');

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
