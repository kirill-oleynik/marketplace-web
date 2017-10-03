const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const { TermsOfUse } = require('../../app/components/terms_of_use');

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <TermsOfUse
        isOpen
        toggle={() => {}}
        t={(translation) => translation}
      />
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});
