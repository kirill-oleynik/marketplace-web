const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const ApplicationGallery = require('../../../app/components/applications/gallery').default;

const renderGallery = () => (
  <ApplicationGallery
    slides={[
      {
        id: 1,
        title: 'Hello World!',
        description: 'Pam Pam',
        url: 'https://example.com/1.png'
      },
      {
        id: 2,
        title: 'Bye World!',
        description: 'Hey Ho',
        url: 'https://example.com/2.png'
      }
    ]}
  />
);

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      renderGallery()
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});

describe('#handleSlideChange', () => {
  test('it changes currentIndex state', () => {
    const component = shallow(
      renderGallery()
    );

    expect(component.state().currentIndex).toEqual(0);
    component.instance().handleSlideChange(1);
    expect(component.state().currentIndex).toEqual(1);
  });
});

describe('#handleFullscreenClick', () => {
  test('it changes isOpen state', () => {
    const component = shallow(
      renderGallery()
    );

    expect(component.state().isOpen).toEqual(false);
    component.instance().handleFullscreenClick();
    expect(component.state().isOpen).toEqual(true);
  });
});

describe('#handleCloseClick', () => {
  test('it changes isOpen state', () => {
    const component = shallow(
      renderGallery()
    );

    expect(component.state().isOpen).toEqual(false);
    component.instance().handleFullscreenClick();
    expect(component.state().isOpen).toEqual(true);
    component.instance().handleCloseClick();
    expect(component.state().isOpen).toEqual(false);
  });
});
