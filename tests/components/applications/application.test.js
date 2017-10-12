import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { Application } from 'app/components/applications/application';

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <Application
        canToggleFavorite
        deleteReview={() => {}}
        createReview={() => {}}
        addToFavorites={() => {}}
        removeFromFavorites={() => {}}
        t={(translation) => translation}
        gallery={{
          slides: []
        }}
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
        appRating={{
          average: 0,
          total: 0,
          votes: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
          }
        }}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
