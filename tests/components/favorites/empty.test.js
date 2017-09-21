const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const { EmptyFavorites } = require('../../../app/components/favorites/empty');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <EmptyFavorites
        t={(translation) => translation}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
