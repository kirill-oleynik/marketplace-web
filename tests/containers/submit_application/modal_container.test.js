const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const SubmitApplicationModalContainer = require('../../../app/containers/submit_application/modal_container').default;

const fakeStore = (state = {}) => ({
  subscribe() {},
  dispatch() {},
  getState() { return state; }
});

const submitApplication = {
  modalIsActive: false,
  errors: {}
}

describe('#render', () => {
  test('it renders correctly', () => {
    const store = fakeStore({
      submitApplication
    });

    const component = shallow(
      <SubmitApplicationModalContainer />,
      { context: { store } }
    )

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
