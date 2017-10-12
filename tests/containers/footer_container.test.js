import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import FooterContainer from 'app/containers/footer_container';

const DummyComponent = () => (
  <div />
);

const renderFooterContainer = () => (
  <FooterContainer>
    <DummyComponent />
  </FooterContainer>
);

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      renderFooterContainer()
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
      renderFooterContainer()
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
      renderFooterContainer()
    );

    expect(component.state().isPrivacyPolicyShown).toEqual(false);

    component.instance().handlePrivacyPolicyClick();
    expect(component.state().isPrivacyPolicyShown).toEqual(true);

    component.instance().handlePrivacyPolicyClick();
    expect(component.state().isPrivacyPolicyShown).toEqual(false);
  });
});
