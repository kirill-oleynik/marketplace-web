const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const ResetPasswordConfirmForm = require('../../../app/components/reset_password/confirm_form').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <ResetPasswordConfirmForm
        t={(translate) => translate}
        onSubmit={() => {}}
        handleFormCancel={() => {}}
        errors={{}}
        revalidation={{}}
      />
    );

    expect(toJSON(component)).toMatchSnapshot();
  });
});
