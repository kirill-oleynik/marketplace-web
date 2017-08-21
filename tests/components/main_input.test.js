const React = require('react');
const renderer = require('react-test-renderer');
const MainInput = require('../../app/components/main_input').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <MainInput
        name="test"
        label="Test"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
