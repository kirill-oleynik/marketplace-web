const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const SubmitApplicationFormContainer = require('../../../app/containers/submit_application/form_container').default;

const fakeStore = (state = {}) => ({
  subscribe() {},
  dispatch() {},
  getState() { return state; }
});

const submitApplication = {
  errors: {}
}

describe('#render', () => {
  test('it renders correctly', () => {
    const store = fakeStore({
      submitApplication
    });

    const component = shallow(
      <SubmitApplicationFormContainer
        t={(translate) => translate}
        submitApplication={() => {}}
        toggleSubmitApplicationModal={() => {}}
      />,
      { context: { store } }
    )

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
