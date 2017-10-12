import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import FavoritesContainer from 'app/containers/notifications_container';

const fakeStore = (state = {}) => ({
  subscribe() {},
  dispatch() {},
  getState() { return state; }
});

const event = 'Test';
const notifications = {
  event
};

const renderFavoritesContainer = () => (
  <FavoritesContainer
    t={(translation) => translation}
  />
);

describe('#render', () => {
  test('it renders correctly', () => {
    const store = fakeStore({
      notifications
    });

    const component = shallow(
      renderFavoritesContainer(),
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
      notifications
    });

    const component = shallow(
      renderFavoritesContainer(),
      { context: { store } }
    );

    const props = component.props();

    expect(props.event).toEqual(event);
    expect(props.hide).toBeInstanceOf(Function);
  });
});
