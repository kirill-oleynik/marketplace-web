const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const ButtonWithIcon = require('../../app/components/button_with_icon').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <ButtonWithIcon
        text="TestText"
        icon="TestIcon"
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
