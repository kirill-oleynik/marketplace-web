const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const {
  Category
} = require('../../../app/components/categories/category');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <Category
        t={(translation) => translation}
        category={{ id: 1, title: 'Test1', slug: 'test_1' }}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
