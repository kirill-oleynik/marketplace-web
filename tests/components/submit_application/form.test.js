const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const SubmitApplicationForm = require('../../../app/components/submit_application/form').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <SubmitApplicationForm
        t={() => {}}
        errors={{}}
        onSubmit={() => {}}
        revalidation={{}}
        closeModal={() => {}}
      />
    );

    expect(toJSON(component)).toMatchSnapshot();
  });
});
