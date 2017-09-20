const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const {
  SubmitReview
} = require('../../../app/components/applications/submit_review');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <SubmitReview
        t={(translation) => translation}
        value={4}
        onSubmit={() => {}}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
