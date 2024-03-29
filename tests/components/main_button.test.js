const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const MainButton = require('../../app/components/main_button').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <MainButton size="lg"color="blue">
        Test
      </MainButton>
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
