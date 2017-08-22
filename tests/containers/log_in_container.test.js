const React = require('react');
const renderer = require('react-test-renderer');
const { LogInContainer } = require('../../app/containers/log_in_container');

jest.mock('../../app/components/log_in_form', () => 'Form');

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <LogInContainer
        errors={{}}
        logIn={() => {}}
        t={(translation) => translation}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
