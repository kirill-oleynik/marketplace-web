const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const { ProfileFormContainer } = require('../../../app/containers/profile/profile_form_container');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <ProfileFormContainer
        currentUser={{}}
        errors={{}}
        t={() => {}}
        updateProfile={() => {}}
      />
    );

    expect(toJSON(component)).toMatchSnapshot();
  });
});
