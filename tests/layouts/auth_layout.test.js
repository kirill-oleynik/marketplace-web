const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const AuthLayout = require('../../app/layouts/auth_layout').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <AuthLayout>
        <div>Hello</div>
      </AuthLayout>
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
