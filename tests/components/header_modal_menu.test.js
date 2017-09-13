const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const {
  HeaderModalMenu
} = require('../../app/components/header_modal_menu');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <HeaderModalMenu
        isOpen={false}
        toggle={() => {}}
        currentUser={{}}
        t={() => {}}
        openProfile={() => {}}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
