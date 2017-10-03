const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const FooterContainer = require('../../app/containers/footer_container').default;

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <FooterContainer />
    );

    component.setState({
      isTermsOfUseShown: true,
      isPrivacyPolicyShown: true
    });

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});

describe('#handleTermsOfUseClick', () => {
  it('toggles isTermsOfUseShown state', () => {
    const component = shallow(
      <FooterContainer />
    );

    expect(component.state().isTermsOfUseShown).toEqual(false);

    component.instance().handleTermsOfUseClick();
    expect(component.state().isTermsOfUseShown).toEqual(true);

    component.instance().handleTermsOfUseClick();
    expect(component.state().isTermsOfUseShown).toEqual(false);
  });
});

describe('#handlePrivacyPolicyClick', () => {
  it('toggles isPrivacyPolicyShown state', () => {
    const component = shallow(
      <FooterContainer />
    );

    expect(component.state().isPrivacyPolicyShown).toEqual(false);

    component.instance().handlePrivacyPolicyClick();
    expect(component.state().isPrivacyPolicyShown).toEqual(true);

    component.instance().handlePrivacyPolicyClick();
    expect(component.state().isPrivacyPolicyShown).toEqual(false);
  });
});
