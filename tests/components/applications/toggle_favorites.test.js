const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const ToggleFavorite = require('../../../app/components/applications/toggle_favorite').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <ToggleFavorite
        disabled
        addToFavorites={() => {}}
        removeFromFavorites={() => {}}
        application={{
          id: 1,
          favorite: {
            id: 1
          }
        }}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
