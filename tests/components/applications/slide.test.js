const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const ApplicationSlide = require('../../../app/components/applications/slide').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <ApplicationSlide
        application={{
          id: 1,
          title: 'Test1',
          description: 'Hello World!',
          logo: 'https://example.com/image.png'
        }}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
