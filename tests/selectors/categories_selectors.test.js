const {
  getIds, getById, getCategories, getCategoriesWithApplications,
  getRelatedIds, getRelatedCategories, getRelatedCategoriesWithApplications
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

describe('#getRelatedIds', () => {
  describe('when appProfile feched', () => {
    test('it returns related categories ids for current appProfile', () => {
      expect(
        getRelatedIds({
          applications: {
            appProfile: {
              categoriesIds: [1, 2]
            }
          }
        })
      ).toEqual([1, 2]);
    });
  });

  describe('when appProfile is not fetched', () => {
    test('it returns empty array', () => {
      expect(
        getRelatedIds({
          applications: {
            appProfile: {}
          }
        })
      ).toEqual([]);
    });
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

describe('#getRelatedCategories', () => {
  describe('when appProfile is fetched', () => {
    test('it returns related categories for appProfile', () => {
      const firstCategory = { id: 1, title: 'Test1' };
      const secondCategory = { id: 2, title: 'Test2' };

      expect(
        getRelatedCategories({
          applications: {
            appProfile: {
              categoriesIds: [1, 2]
            }
          },
          categories: {
            byId: {
              2: secondCategory,
              1: firstCategory
            }
          }
        })
      ).toEqual([firstCategory, secondCategory]);
    });
  });

  describe('when appProfile is not fetched', () => {
    test('it returns empty array', () => {
      expect(
        getRelatedCategories({
          applications: {
            appProfile: {}
          },
          categories: {
            byId: {
              2: 'secondCategory',
              1: 'firstCategory'
            }
          }
        })
      ).toEqual([]);
    });
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

describe('#getRelatedCategoriesWithApplications', () => {
  describe('when appPrfile is fetched', () => {
    test('it returns related categories with applications except current appProfile', () => {
      const appProfile = {
        id: 1,
        categoriesIds: [1]
      };
      const secondApplication = { id: 2 };

      const category = { id: 1, title: 'Test1', applications: [1, 2] };

      expect(
        getRelatedCategoriesWithApplications({
          applications: {
            appProfile: appProfile,
            byId: {
              1: appProfile,
              2: secondApplication
            }
          },
          categories: {
            byId: {
              1: category
            }
          }
        })
      ).toEqual([
        {
          ...category,
          applications: [secondApplication]
        }
      ]);
    });
  });

  describe('when appProfile is not fetched', () => {
    test('it returns empty array', () => {
      expect(
        getRelatedCategoriesWithApplications({
          applications: {
            appProfile: {},
            byId: {
              1: 'firstApplication',
              2: 'secondApplication'
            }
          },
          categories: {
            byId: {
              2: 'secondCategory',
              1: 'firstCategory'
            }
          }
        })
      ).toEqual([]);
    });
  });
});
