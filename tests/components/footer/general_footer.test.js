import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { GeneralFooter } from 'app/components/footer/general_footer';

const onTermsOfUseClickSpy = jest.fn();
const onPrivacyPolicyClickSpy = jest.fn();

const renderFooter = () => (
  <GeneralFooter
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

    component.find('.main-footer__terms-link').simulate('click');

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

    component.find('.main-footer__privacy-link').simulate('click');

    expect(onPrivacyPolicyClickSpy).toHaveBeenCalled();

    onPrivacyPolicyClickSpy.mockReset();
    onPrivacyPolicyClickSpy.mockRestore();
  });
});
