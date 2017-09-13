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

const applications = {
  ids: [1],
  byId: {
    1: application
  }
};

describe('#render', () => {
  test('it renders correctly', () => {
    const store = fakeStore({
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
      applications
    });

    const component = shallow(
      <HomeContainer />,
      { context: { store } }
    );

    expect(
      component.props().applications
    ).toEqual([application]);
  });
});
