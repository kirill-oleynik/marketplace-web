const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const { ProfileContainer } = require('../../../app/containers/profile/profile_container');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <ProfileContainer
        t={() => {}}
        currentUser={{}}
        profileModalActive={false}
        toggleProfileModal={() => {}}
      />
    );

    expect(toJSON(component)).toMatchSnapshot();
  });
});
