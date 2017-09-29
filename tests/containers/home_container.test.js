const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const HomeContainer = require('../../app/containers/home_container').default;

const fakeStore = (state = {}) => ({
  subscribe() {},
  dispatch() {},
  getState() { return state; }
});

const application = {
  id: 1,
  title: 'Test1'
};

const category = {
  id: 2,
  title: 'Test2'
};

const applications = {
  ids: [1],
  byId: {
    1: application
  }
};

const categories = {
  byId: {
    2: category
  }
};

const search = {
  categoryIds: [2],
  applicationIds: [1]
};

describe('#render', () => {
  test('it renders correctly', () => {
    const store = fakeStore({
      search,
      categories,
      applications
    });

    const component = shallow(
      <HomeContainer />,
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
      search,
      categories,
      applications
    });

    const component = shallow(
      <HomeContainer />,
      { context: { store } }
    );

    expect(
      component.props().featuredApplications
    ).toEqual([application]);

    expect(
      component.props().searchCategories
    ).toEqual([category]);

    expect(
      component.props().searchApplications
    ).toEqual([application]);
  });
});
