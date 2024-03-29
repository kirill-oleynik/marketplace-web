import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import FavoritesContainer from 'app/containers/favorites_container';

const fakeStore = (state = {}) => ({
  subscribe() {},
  dispatch() {},
  getState() { return state; }
});

const favorite = {
  id: 1,
  application_id: 1
};

const favorites = {
  ids: [1],
  byId: {
    1: favorite
  }
};

const application = {
  id: 1,
  title: 'Hello World'
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
      favorites,
      applications
    });

    const component = shallow(
      <FavoritesContainer
        t={(translation) => translation}
      />,
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
      favorites,
      applications
    });

    const component = shallow(
      <FavoritesContainer
        t={(translation) => translation}
      />,
      { context: { store } }
    );

    const props = component.props();

    expect(props.favorites).toEqual([{ application, ...favorite }]);
    expect(props.removeFromFavorites).toBeInstanceOf(Function);
  });
});
