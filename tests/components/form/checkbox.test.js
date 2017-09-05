const React = require('react');
const renderer = require('react-test-renderer');
const Checkbox = require('../../../app/components/form/checkbox').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <Checkbox name="test" text="Test" checked={false} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
