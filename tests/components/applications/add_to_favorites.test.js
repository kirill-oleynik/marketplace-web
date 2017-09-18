const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const {
  AddToFavorites
} = require('../../../app/components/applications/add_to_favorites');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <AddToFavorites
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
