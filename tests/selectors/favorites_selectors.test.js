const {
  getIds, getById, getFavorites, getFavoritesWithApplications
} = require('../../app/selectors/favorites_selectors');

describe('#getIds', () => {
  test('it returns favorites ids', () => {
    expect(
      getIds({
        favorites: {
          ids: 'Test'
        }
      })
    ).toEqual('Test');
  });
});

describe('#getById', () => {
  test('it returns favorites byId', () => {
    expect(
      getById({
        favorites: {
          byId: 'Test'
        }
      })
    ).toEqual('Test');
  });
});

describe('#getFavorites', () => {
  test('it returns favorites', () => {
    const firstFavorite = { id: 1, application_id: 3 };
    const secondFavorite = { id: 2, application_id: 4 };

    expect(
      getFavorites({
        favorites: {
          ids: [1, 2],
          byId: {
            2: firstFavorite,
            1: secondFavorite
          }
        }
      })
    ).toEqual([secondFavorite, firstFavorite]);
  });
});

describe('#getFavoritesWithApplications', () => {
  test('it returns favorites with applications', () => {
    const firstFavorite = { id: 1, application_id: 1 };
    const secondFavorite = { id: 2, application_id: 2 };

    const firstApplication = { id: 1, title: 'First' };
    const secondApplication = { id: 2, title: 'Second' };

    expect(
      getFavoritesWithApplications({
        applications: {
          byId: {
            1: firstApplication,
            2: secondApplication
          }
        },
        favorites: {
          ids: [1, 2],
          byId: {
            1: firstFavorite,
            2: secondFavorite
          }
        }
      })
    ).toEqual([
      {
        ...firstFavorite,
        application: firstApplication
      },
      {
        ...secondFavorite,
        application: secondApplication
      }
    ]);
  });
});
