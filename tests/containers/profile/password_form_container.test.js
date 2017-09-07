const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const { PasswordFormContainer } = require('../../../app/containers/profile/password_form_container');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <PasswordFormContainer
        errors={{}}
        t={() => {}}
        updatePassword={() => {}}
      />
    );

    expect(toJSON(component)).toMatchSnapshot();
  });
});
