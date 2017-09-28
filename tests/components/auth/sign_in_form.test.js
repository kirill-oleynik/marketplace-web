const React = require('react');
const renderer = require('react-test-renderer');
const { SignInForm } = require('../../../app/components/auth/sign_in_form.js');

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <SignInForm
        t={(translation) => translation}
        onSubmit={() => {}}
        errors={{}}
        revalidation={{
          form: {
            values: [{
              rememberMe: false
            }]
          },
          onChange: (value) => () => {}
        }}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
