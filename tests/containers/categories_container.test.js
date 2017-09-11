const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const CategoriesContainer = require('../../app/containers/categories_container').default;

const FakeComponent = () => (
  <div />
);

const fakeStore = (state = {}) => ({
  subscribe() {},
  dispatch() {},
  getState() { return state; }
});

const firstCategory = {
  id: 1,
  title: 'Test1',
  applications: []
};

const secondCategory = {
  id: 2,
  title: 'Test2',
  applications: []
};

const applications = {
  byId: {}
};

const categories = {
  ids: [1, 2],
  byId: {
    2: secondCategory,
    1: firstCategory
  }
};

describe('#render', () => {
  test('it renders correctly', () => {
    const store = fakeStore({
      categories,
      applications
    });

    const WrappedComponent = CategoriesContainer(FakeComponent);
    const component = shallow(
      <WrappedComponent />,
      { context: { store } }
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});

describe('#passedProps', () => {
  test('it passess props to component correctly', () => {
    const store = fakeStore({
      categories,
      applications
    });

    const WrappedComponent = CategoriesContainer(FakeComponent);
    const component = shallow(
      <WrappedComponent />,
      { context: { store } }
    );

    expect(
      component.find(FakeComponent).props().categories
    ).toEqual([firstCategory, secondCategory]);

    expect(
      component.find(FakeComponent).props().expand
    ).toBeInstanceOf(Function);

    expect(
      component.find(FakeComponent).props().collapse
    ).toBeInstanceOf(Function);
  });
});
