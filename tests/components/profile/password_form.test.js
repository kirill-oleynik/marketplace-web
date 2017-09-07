const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const PasswordForm = require('../../../app/components/profile/password_form').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <PasswordForm
        t={() => {}}
        errors={{}}
        onSubmit={() => {}}
        revalidation={{}}
      />
    );

    expect(toJSON(component)).toMatchSnapshot();
  });
});
