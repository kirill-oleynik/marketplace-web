const { gallery } = require('../../app/reducers/application');
const {
  SUCCESS, APPLICATIONS_FETCH_GALLERY, AUTH_SIGN_OUT
} = require('./../../app/constants');

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

  test('it handles AUTH_SIGN_OUT_SUCESS', () => {
    const state = gallery(
      {
        id: 1
      },
      {
        type: AUTH_SIGN_OUT + SUCCESS
      }
    );

    expect(state).toEqual({});
  });
});
