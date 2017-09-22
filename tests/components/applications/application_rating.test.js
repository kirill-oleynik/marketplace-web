const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const {
  ApplicationRating
} = require('../../../app/components/applications/application_rating');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <ApplicationRating
        t={(translation) => translation}
        data={{
          average: 0,
          total: 0,
          votes: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
          }
        }}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
