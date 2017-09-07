const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const ProfileModal = require('../../../app/components/profile/profile_modal').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <ProfileModal
        t={() => {}}
        isOpen={true}
        closeModal={() => {}}
        currentUser={{}}
      />
    );

    expect(toJSON(component)).toMatchSnapshot();
  });
});
