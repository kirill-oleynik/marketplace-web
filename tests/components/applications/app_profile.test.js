const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const {
  AppProfile
} = require('../../../app/components/applications/app_profile');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <AppProfile
        canToggleFavorite
        createReview={() => {}}
        addToFavorites={() => {}}
        removeFromFavorites={() => {}}
        t={(translation) => translation}
        appProfile={{
          id: '1',
          slug: 'slug',
          title: 'title',
          description: 'description',
          summary: 'summary',
          phone: 'phone',
          email: 'email',
          website: 'website',
          address: 'address',
          founded: '2014-05-24',
          review: 3
        }}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
