const { getGallery } = require('../../app/selectors/application_selectors');

describe('#getGallery', () => {
  test('it returns correct data', () => {
    const gallery = Symbol('Gallery');

    expect(
      getGallery({
        application: { gallery }
      })
    ).toEqual(gallery);
  });
});
