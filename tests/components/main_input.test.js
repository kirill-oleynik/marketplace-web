const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const MainInput = require('../../app/components/main_input').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <MainInput
        name="test"
        label="Test"
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
