const React = require('react');
const renderer = require('react-test-renderer');
const MainButton = require('../../app/components/main_button').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <MainButton size="lg"color="blue">Test</MainButton>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
