const React = require('react');
const renderer = require('react-test-renderer');
const { ProfileFormContainer } = require('../../../app/containers/profile/profile_form_container');

jest.mock('../../../app/components/profile/profile_form', () => 'ProfileForm');

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <ProfileFormContainer
        currentUser={{}}
        errors={{}}
        t={() => {}}
        updateProfile={() => {}}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
