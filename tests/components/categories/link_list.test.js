const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const {
  CategoriesLinkList
} = require('../../../app/components/categories/link_list');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <CategoriesLinkList
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
