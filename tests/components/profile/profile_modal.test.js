const React = require('react');
const renderer = require('react-test-renderer');
const ProfileModal = require('../../../app/components/profile/profile_modal').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <ProfileModal
        isOpen={true}
        closeModal={() => {}}
        currentUser={{}}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
