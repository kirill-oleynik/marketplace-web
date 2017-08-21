const React = require('react');
const renderer = require('react-test-renderer');
const { SignUpForm } = require('../../app/components/sign_up_form');

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <SignUpForm
        t={(translation) => translation}
        onSubmit={() => {}}
        errors={{}}
        revalidation={{
          form: {},
          onChange: (value) => () => {}
        }}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
