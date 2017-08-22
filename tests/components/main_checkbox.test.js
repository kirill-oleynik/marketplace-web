const React = require('react');
const renderer = require('react-test-renderer');
const MainCheckbox = require('../../app/components/main_checkbox').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <MainCheckbox
        name="test"
        text="Test"
        value={true}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
