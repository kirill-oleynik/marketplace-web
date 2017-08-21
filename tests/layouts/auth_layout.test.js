const React = require('react');
const renderer = require('react-test-renderer');
const AuthLayout = require('../../app/layouts/auth_layout').default;

jest.mock('../../app/containers/header_container', () => 'Header');

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <AuthLayout>
        <div>Hello</div>
      </AuthLayout>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
