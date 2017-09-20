const {
  truncateParagraph, humanizeUrl, emailLink, phoneLink
} = require('../../app/helpers/text_helpers');

describe('#truncateParagraph', () => {
  it('truncates text by sentences', () => {
    const text = 'Lorem ipsum dolor sit amet. Cras ut mauris. Cras ut mauris.';
    const expectedText = 'Lorem ipsum dolor sit amet ...';

    expect(truncateParagraph(text, 30)).toEqual(expectedText);
  });
});

describe('#humanizeUrl', () => {
  it('removes http protocol from url', () => {
    expect(humanizeUrl('http://test.com')).toEqual('test.com');
  });

  it('removes https protocol from url', () => {
    expect(humanizeUrl('https://test.com')).toEqual('test.com');
  });

  it('returns original string if there is no protocol', () => {
    expect(humanizeUrl('test.com')).toEqual('test.com');
  });
})

describe('#emailLink', () => {
  it('prepends mailto: to given string', () => {
    expect(emailLink('email@example.com')).toEqual('mailto:email@example.com');
  });
});

describe('#emailLink', () => {
  it('prepends tel: to given string', () => {
    expect(phoneLink('134624')).toEqual('tel:134624');
  });
});
