const React = require('react');
const renderer = require('react-test-renderer');
const { LogInContainer } = require('../../app/containers/log_in_container');

jest.mock('../../app/components/auth/log_in_form', () => 'Form');

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <LogInContainer
        errors={{}}
        logInAndRedirect={() => {}}
        t={(translation) => translation}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
