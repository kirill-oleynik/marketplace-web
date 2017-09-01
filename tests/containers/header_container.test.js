const React = require('react');
const renderer = require('react-test-renderer');
const { HeaderContainer } = require('../../app/containers/header_container');

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <HeaderContainer
        currentUser={{}}
        t={() => {}}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
