import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ConnectedHeaderContainer, { HeaderContainer } from 'app/containers/header_container';

const fakeStore = (state = {}) => ({
  subscribe() {},
  dispatch() {},
  getState() { return state; }
});

const currentUser = {
  id: Symbol('userId')
};

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
      applications,
      currentUser
    });

    const component = shallow(
      <ConnectedHeaderContainer />,
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
      applications,
      currentUser
    });

    const component = shallow(
      <ConnectedHeaderContainer />,
      { context: { store } }
    );

    const props = component.props();

    expect(props.currentUser).toEqual(currentUser);
    expect(props.searchCategories).toEqual([category]);
    expect(props.searchApplications).toEqual([application]);
    expect(props.signOut).toBeInstanceOf(Function);
    expect(props.searchFetch).toBeInstanceOf(Function);
    expect(props.toggleProfileModal).toBeInstanceOf(Function);
    expect(props.toggleSubmitApplicationModal).toBeInstanceOf(Function);
  });
});

describe('#openProfileModal', () => {
  test('it calls toggleProfileModal', () => {
    const toggleProfileModalSpy = jest.fn();

    const component = shallow(
      <HeaderContainer
        currentUser={{}}
        toggleProfileModal={toggleProfileModalSpy}
        toggleSubmitApplicationModal={() => {}}
      />
    );

    component.instance().openProfileModal();

    expect(toggleProfileModalSpy).toHaveBeenCalledWith(true);

    toggleProfileModalSpy.mockReset();
    toggleProfileModalSpy.mockRestore();
  });
});

describe('#openSubmitApplicationModal', () => {
  test('it calls toggleSubmitApplicationModal', () => {
    const toggleSubmitApplicationModalSpy = jest.fn();

    const component = shallow(
      <HeaderContainer
        currentUser={{}}
        toggleProfileModal={() => {}}
        toggleSubmitApplicationModal={toggleSubmitApplicationModalSpy}
      />
    );

    component.instance().openSubmitApplicationModal();

    expect(toggleSubmitApplicationModalSpy).toHaveBeenCalledWith(true);

    toggleSubmitApplicationModalSpy.mockReset();
    toggleSubmitApplicationModalSpy.mockRestore();
  });
});

describe('#handleMenuClick', () => {
  test('it toggles isMenuOpen state', () => {
    const component = shallow(
      <HeaderContainer
        currentUser={{}}
        toggleProfileModal={() => {}}
        toggleSubmitApplicationModal={() => {}}
      />
    );

    expect(component.state().isMenuOpen).toEqual(false);
    component.instance().handleMenuClick();
    expect(component.state().isMenuOpen).toEqual(true);
    component.instance().handleMenuClick();
    expect(component.state().isMenuOpen).toEqual(false);
  });
});
