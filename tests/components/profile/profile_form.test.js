const React = require('react');
const renderer = require('react-test-renderer');
const ProfileForm = require('../../../app/components/profile/profile_form').default;

jest.mock('../../../app/components/main_input', () => 'Main Input');

describe('#render', () => {
  test('it renders correctly', () => {
    const tree = renderer.create(
      <ProfileForm
        t={() => {}}
        errors={{}}
        onSubmit={() => {}}
        revalidation={{}}
        onEmailChange={() => {}}
        needPasswordConfirmation={false}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
