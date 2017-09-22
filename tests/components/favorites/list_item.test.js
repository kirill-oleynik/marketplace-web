const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const FavoritesListItem = require('../../../app/components/favorites/list_item').default;

const removeFromFavorites = jest.fn();

const favorite = {
  id: 1,
  application: {
    id: 2,
    title: 'Hello',
    summary: 'Hello World',
    slug: 'hello',
    logo: 'https://example.com'
  }
};

const renderFavoritesListItem = () => (
  <FavoritesListItem
    favorite={favorite}
    removeFromFavorites={removeFromFavorites}
  />
);

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      renderFavoritesListItem()
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});

describe('#handleRemoveClick', () => {
  test('it sets isModalShown state to true', () => {
    const component = shallow(
      renderFavoritesListItem()
    );

    expect(component.state().isModalShown).toEqual(false);
    component.instance().handleRemoveClick();
    expect(component.state().isModalShown).toEqual(true);
  });
});

describe('#handleModalCloseClick', () => {
  test('it sets isModalShown state to false', () => {
    const component = shallow(
      renderFavoritesListItem()
    );

    expect(component.state().isModalShown).toEqual(false);
    component.instance().handleRemoveClick();
    expect(component.state().isModalShown).toEqual(true);
    component.instance().handleModalCloseClick();
    expect(component.state().isModalShown).toEqual(false);
  });
});

describe('#removeFavorite', () => {
  test('it calls removeFromFavorites with favorite', () => {
    const component = shallow(
      renderFavoritesListItem()
    );

    component.instance().removeFavorite();

    expect(removeFromFavorites).toHaveBeenCalledWith(favorite);
  });
});
