import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { AuthFooter } from 'app/components/footer/auth_footer';

const onTermsOfUseClickSpy = jest.fn();
const onPrivacyPolicyClickSpy = jest.fn();

const renderFooter = () => (
  <AuthFooter
    t={(translation) => translation}
    onTermsOfUseClick={onTermsOfUseClickSpy}
    onPrivacyPolicyClick={onPrivacyPolicyClickSpy}
  />
);

describe('#render', () => {
  test('it renders correctly', () => {
    const component = shallow(
      renderFooter()
    );

    expect(
      toJSON(component)
    ).toMatchSnapshot();
  });
});

describe('on Terms Of Use click', () => {
  it('calls onTermsOfUseClick', () => {
    const component = shallow(
      renderFooter()
    );

    component.find('.rights-link__terms').simulate('click');

    expect(onTermsOfUseClickSpy).toHaveBeenCalled();

    onTermsOfUseClickSpy.mockReset();
    onTermsOfUseClickSpy.mockRestore();
  });
});

describe('on Privacy Policy click', () => {
  it('calls onPrivacyPolicyClick', () => {
    const component = shallow(
      renderFooter()
    );

    component.find('.rights-link__privacy').simulate('click');

    expect(onPrivacyPolicyClickSpy).toHaveBeenCalled();

    onPrivacyPolicyClickSpy.mockReset();
    onPrivacyPolicyClickSpy.mockRestore();
  });
});
