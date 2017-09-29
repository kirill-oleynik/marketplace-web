jest.mock('../../app/helpers/dom_helpers', () => ({
  scrollToElement() {}
}));

const React = require('react');
const { mount, shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const domHelpers = require('../../app/helpers/dom_helpers');
const ScrollTopButton = require('../../app/components/scroll_top_button').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <ScrollTopButton />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});

describe('#handleScroll', () => {
  test('it sets isShown state to true, if window scroll bigger than limit', () => {
    const component = shallow(
      <ScrollTopButton />
    );

    expect(component.state().isShown).toEqual(false);

    window.scrollY = ScrollTopButton.FADE_IN_SCROLL_LIMIT + 100;
    component.instance().handleScroll();
    expect(component.state().isShown).toEqual(true);
  });

  test('it sets isShown state to false, if window scroll less than limit', () => {
    const component = shallow(
      <ScrollTopButton />
    );

    expect(component.state().isShown).toEqual(false);

    window.scrollY = ScrollTopButton.FADE_IN_SCROLL_LIMIT + 100;
    component.instance().handleScroll();
    expect(component.state().isShown).toEqual(true);

    window.scrollY = ScrollTopButton.FADE_IN_SCROLL_LIMIT - 100;
    component.instance().handleScroll();
    expect(component.state().isShown).toEqual(false);
  });

  afterEach(() => {
    window.scrollY = 0;
  });
});

describe('#handleClick', () => {
  it('scrolls to top of document body', () => {
    const spy = jest.spyOn(domHelpers, 'scrollToElement');

    const component = shallow(
      <ScrollTopButton />
    );

    component.instance().handleClick();

    expect(spy).toHaveBeenCalledWith(document.body);

    spy.mockReset();
    spy.mockRestore();
  });
});

describe('on button click', () => {
  it('calls handleClick, if window scroll bigger than limit', () => {
    const component = mount(
      <ScrollTopButton />
    );

    const spy = jest.spyOn(component.instance(), 'handleClick');

    component.update();

    window.scrollY = ScrollTopButton.FADE_IN_SCROLL_LIMIT + 100;
    component.instance().handleScroll();

    component.find('button').simulate('click');

    expect(spy).toHaveBeenCalled();

    spy.mockReset();
    spy.mockRestore();
  });

  it('not calls handleClick, if window scroll less than limit', () => {
    const component = mount(
      <ScrollTopButton />
    );

    const spy = jest.spyOn(component.instance(), 'handleClick');

    component.update();

    window.scrollY = ScrollTopButton.FADE_IN_SCROLL_LIMIT - 100;
    component.instance().handleScroll();

    component.find('button').simulate('click');

    expect(spy).not.toHaveBeenCalled();

    spy.mockReset();
    spy.mockRestore();
  });

  afterEach(() => {
    window.scrollY = 0;
  });
});
