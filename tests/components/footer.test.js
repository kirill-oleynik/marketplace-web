const React = require('react');
const { shallow } = require('enzyme');
const toJSON = require('enzyme-to-json').default;
const { Footer } = require('../../app/components/footer');

const onTermsOfUseClickSpy = jest.fn();
const onPrivacyPolicyClickSpy = jest.fn();

const renderFooter = () => (
  <Footer
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
