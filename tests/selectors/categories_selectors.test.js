const {
  getIds, getById, getCategories, getCategoriesWithApplications
} = require('../../app/selectors/categories_selectors');

describe('#getIds', () => {
  test('it returns categories ids', () => {
    expect(
      getIds({
        categories: {
          ids: 'Test'
        }
      })
    ).toEqual('Test');
  });
});

describe('#getById', () => {
  test('it returns categories byId', () => {
    expect(
      getById({
        categories: {
          byId: 'Test'
        }
      })
    ).toEqual('Test');
  });
});

describe('#getCategories', () => {
  test('it returns categories', () => {
    const firstCategory = { id: 1, title: 'Test1' };
    const secondCategory = { id: 2, title: 'Test2' };

    expect(
      getCategories({
        categories: {
          ids: [1, 2],
          byId: {
            2: secondCategory,
            1: firstCategory
          }
        }
      })
    ).toEqual([firstCategory, secondCategory]);
  });
});

describe('#getCategoriesWithApplications', () => {
  test('it returns categories with applications', () => {
    const firstApplication = { id: 1 };
    const secondApplication = { id: 2 };

    const firstCategory = { id: 1, title: 'Test1', applications: [2] };
    const secondCategory = { id: 2, title: 'Test2', applications: [1] };

    expect(
      getCategoriesWithApplications({
        applications: {
          byId: {
            1: firstApplication,
            2: secondApplication
          }
        },
        categories: {
          ids: [1, 2],
          byId: {
            2: secondCategory,
            1: firstCategory
          }
        }
      })
    ).toEqual([
      {
        ...firstCategory,
        applications: [secondApplication]
      },
      {
        ...secondCategory,
        applications: [firstApplication]
      }
    ]);
  });
});
