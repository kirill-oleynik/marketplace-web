const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const {
  CategoriesContainer
} = require('../../app/containers/categories_container');

const FakeComponent = () => (
  <div />
);

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <CategoriesContainer>
        <FakeComponent />
      </CategoriesContainer>
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});

describe('#passedProps', () => {
  test('it passess props to children correctly', () => {
    const categories = Symbol('categories');

    const component = shallow(
      <CategoriesContainer categories={categories}>
        <FakeComponent />
      </CategoriesContainer>
    );

    expect(
      component.find(FakeComponent).props()
    ).toEqual({
      categories
    });
  });
});
