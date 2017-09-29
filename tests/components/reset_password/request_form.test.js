const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const ResetPasswordRequestForm = require('../../../app/components/reset_password/request_form').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <ResetPasswordRequestForm
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
