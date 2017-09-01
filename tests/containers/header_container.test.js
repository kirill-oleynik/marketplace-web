const React = require('react');
const renderer = require('react-test-renderer');
const { HeaderContainer } = require('../../app/containers/header_container');

jest.mock('../../app/components/header', () => 'Header');
jest.mock('../../app/components/user_profile_modal', () => 'User Profile');

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <HeaderContainer
        currentUser={{}}
        t={() => {}}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
