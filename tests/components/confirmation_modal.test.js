const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const { ConfirmationModal } = require('../../app/components/confirmation_modal');

const close = jest.fn();
const action = jest.fn();

const renderConfirmationModal = () => (
  <ConfirmationModal
    isOpen
    close={close}
    action={action}
    t={(translation) => translation}
  />
);

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      renderConfirmationModal()
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});

describe('#handleAcceptClick', () => {
  test('it calls close and action', () => {
    const component = shallow(
      renderConfirmationModal()
    );

    component.instance().handleAcceptClick();

    expect(close).toHaveBeenCalled();
    expect(action).toHaveBeenCalled();
  });
});
