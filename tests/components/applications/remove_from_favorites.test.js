const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const {
  RemoveFromFavorites
} = require('../../../app/components/applications/remove_from_favorites');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <RemoveFromFavorites
        t={() => {}}
        disabled
        onClick={() => {}}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
