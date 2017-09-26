const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const SubmitApplicationModal = require('../../../app/components/submit_application/modal').default;

describe('#render', () => {
  describe('when modal is closed', () => {
    test('it renders correctly', () => {
      const component = shallow(
        <SubmitApplicationModal
          isOpen={false}
          closeModal={() => {}}
        />
      );

      expect(toJSON(component)).toMatchSnapshot();
    });
  });

  describe('when modal is opend', () => {
    test('it renders correctly', () => {
      const component = shallow(
        <SubmitApplicationModal
          isOpen={true}
          closeModal={() => {}}
        />
      );

      expect(toJSON(component)).toMatchSnapshot();
    });
  });
});
