const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const ButtonCircle = require('../../app/components/button_circle').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <ButtonCircle
        color="grey"
        icon="arrow-up"
        className="test"
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
