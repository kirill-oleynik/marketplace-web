const React = require('react');
const renderer = require('react-test-renderer');
const { ProfileContainer } = require('../../../app/containers/profile/profile_container');

jest.mock('../../../app/components/profile/profile_modal', () => 'ProfileModal');

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <ProfileContainer
        currentUser={{}}
        profileModalActive={false}
        toggleProfileModal={() => {}}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
