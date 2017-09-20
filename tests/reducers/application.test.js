const { gallery } = require('../../app/reducers/application');
const { SUCCESS, APPLICATIONS_FETCH_GALLERY } = require('./../../app/constants');

describe('#gallery', () => {
  test('it has correct initial state', () => {
    const state = gallery(undefined, {});

    expect(state).toEqual({});
  });

  test('it handles APPLICATIONS_FETCH_GALLERY_SUCCESS', () => {
    const galleryData = Symbol('Gallery');

    const state = gallery(undefined, {
      type: APPLICATIONS_FETCH_GALLERY + SUCCESS,
      payload: { gallery: galleryData }
    });

    expect(state).toEqual(galleryData);
  });
});
