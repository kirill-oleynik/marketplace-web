const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const {
  CategoriesDropdown
} = require('../../../app/components/categories/dropdown');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <CategoriesDropdown
        t={(translation) => translation}
        categories={[
          { id: 1, title: 'Test1' },
          { id: 2, title: 'Test2' }
        ]}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});

describe('#toggle', () => {
  test('it changes isOpen state', () => {
    const component = shallow(
      <CategoriesDropdown
        t={(translation) => translation}
        categories={[
          { id: 1, title: 'Test1' },
          { id: 2, title: 'Test2' }
        ]}
      />
    );

    expect(component.state().isOpen).toEqual(false);

    component.instance().toggle();

    expect(component.state().isOpen).toEqual(true);
  });
});
