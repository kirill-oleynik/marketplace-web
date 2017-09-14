const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const CategoriesList = require('../../../app/components/categories/list').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <CategoriesList
        t={(translation) => translation}
        expand={() => {}}
        collapse={() => {}}
        categories={[
          { id: 1, title: 'Test1', applications: [] },
          { id: 2, title: 'Test2', applications: [
            'app_one',
            'app_two'
          ] }
        ]}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
