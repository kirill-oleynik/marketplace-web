const React = require('react');
const renderer = require('react-test-renderer');
const { LogInForm } = require('../../../app/components/auth/log_in_form.js');

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <LogInForm
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
