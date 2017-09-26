const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;

const {
  LogInWithLinkedin
} = require('../../../app/components/auth/log_in_with_linkedin');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <LogInWithLinkedin
        t={(translation) => translation}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
