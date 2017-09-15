const {
  getById,
  getIds,
  getApplications,
  getAppProfile
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
    })).toEqual('appProfile')
  });
});
