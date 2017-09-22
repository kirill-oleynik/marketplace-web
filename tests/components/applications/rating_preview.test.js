const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const {
  RatingPreview
} = require('../../../app/components/applications/rating_preview');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <RatingPreview
        t={(translation) => translation}
        total={1}
        average={1}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
