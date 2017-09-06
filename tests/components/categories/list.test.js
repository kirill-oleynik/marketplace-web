const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const { CategoriesList } = require('../../../app/components/categories/list');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <CategoriesList
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
