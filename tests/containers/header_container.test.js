const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const { HeaderContainer } = require('../../app/containers/header_container');

const fakeStore = (state = {}) => ({
  subscribe() {},
  dispatch() {},
  getState() { return state; }
});

const currentUser = {
  id: 1
}

describe('#render', () => {
  test('it renders correctly', () => {
    const store = fakeStore({
      currentUser
    });

    const component = shallow(
      <HeaderContainer
        t={(translation) => translation}
        toggleProfileModal={() => {}}
        openSubmitApplication={() => {}}
        toggleSubmitApplicationModal={() => {}}
      />,
      { context: { store } }
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
