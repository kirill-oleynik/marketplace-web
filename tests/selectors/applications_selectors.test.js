const {
  getById,
  getIds,
  getApplications,
  getAppProfile,
  getCanToggleFavorite
} = require('../../app/selectors/applications_selectors');

describe('#getById', () => {
  test('it returns applications byId', () => {
    expect(
      getById({
        applications: {
          byId: 'Test'
        }
      })
    ).toEqual('Test');
  });
});

describe('#getIds', () => {
  test('it returns applications ids', () => {
    expect(
      getIds({
        applications: {
          ids: ['Test']
        }
      })
    ).toEqual(['Test']);
  });
});

describe('#getApplications', () => {
  test('it returns applications', () => {
    const firstApplication = { id: 1, title: 'Test1' };
    const secondApplication = { id: 2, title: 'Test2' };

    expect(
      getApplications({
        applications: {
          ids: [1, 2],
          byId: {
            2: secondApplication,
            1: firstApplication
          }
        }
      })
    ).toEqual([firstApplication, secondApplication]);
  });
});

describe('#getAppProfile', () => {
  test('it returns appProfile', () => {
    expect(getAppProfile({
      applications: {
        appProfile: 'appProfile'
      }
    })).toEqual('appProfile');
  });
});

describe('#getCanToggleFavorite', () => {
  describe('when current user present', () => {
    describe('when app in progress', () => {
      test('it returns false', () => {
        expect(getCanToggleFavorite({
          currentUser: { id: 1 },
          applications: {
            appProfile: {
              inProgress: true
            }
          }
        })).toEqual(false);
      });
    });

    describe('when app not in progress', () => {
      test('it returns true', () => {
        expect(getCanToggleFavorite({
          currentUser: { id: 1 },
          applications: {
            appProfile: {
              inProgress: false
            }
          }
        })).toEqual(true);
      });
    });
  });

  describe('when current user not present', () => {
    test('it returns false', () => {
      expect(getCanToggleFavorite({
        currentUser: {},
        applications: {
          appProfile: {
            inProgress: false
          }
        }
      })).toEqual(false);
    });
  });
});
