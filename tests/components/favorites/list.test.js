const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const { FavoritesList } = require('../../../app/components/favorites/list');

const renderFavoritesList = () => (
  <FavoritesList
    removeFromFavorites={() => {}}
    t={(translation) => translation}
    favorites={[
      {
        id: 1,
        application: {
          id: 2,
          title: 'Hello',
          summary: 'Hello World',
          slug: 'hello',
          logo: 'https://example.com'
        }
      }
    ]}
  />
);

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      renderFavoritesList()
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});

describe('#handleExpandClick', () => {
  test('it toggles isExpanded state', () => {
    const component = shallow(
      renderFavoritesList()
    );

    expect(component.state().isExpanded).toEqual(false);
    component.instance().handleExpandClick();
    expect(component.state().isExpanded).toEqual(true);
    component.instance().handleExpandClick();
    expect(component.state().isExpanded).toEqual(false);
  });
});
