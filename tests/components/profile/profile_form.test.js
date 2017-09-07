const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const ProfileForm = require('../../../app/components/profile/profile_form').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <ProfileForm
        t={() => {}}
        errors={{}}
        onSubmit={() => {}}
        revalidation={{}}
        onEmailChange={() => {}}
        needPasswordConfirmation={false}
      />
    );

    expect(toJSON(component)).toMatchSnapshot();
  });
});
