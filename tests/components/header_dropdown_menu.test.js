const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const {
  HeaderDropdownMenu
} = require('../../app/components/header_dropdown_menu');

const renderHeaderDropdownMenu = () => (
  <HeaderDropdownMenu
    currentUser={{}}
    signOut={() => {}}
    openProfile={() => {}}
    openSubmitApplication={() => {}}
    t={(translation) => translation}
  />
);

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      renderHeaderDropdownMenu()
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});

describe('#toggle', () => {
  test('it changes dropdownOpen state', () => {
    const component = shallow(
      renderHeaderDropdownMenu()
    );

    expect(component.state().dropdownOpen).toEqual(false);
    component.instance().toggle();
    expect(component.state().dropdownOpen).toEqual(true);
  });
});
