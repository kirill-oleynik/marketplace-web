const { truncateParagraph } = require('../../app/helpers/text_helpers');

describe('#truncateParagraph', () => {
  it('truncates text by sentences', () => {
    const text = 'Lorem ipsum dolor sit amet. Cras ut mauris. Cras ut mauris.';
    const expectedText = 'Lorem ipsum dolor sit amet ...';

    expect(truncateParagraph(text, 30)).toEqual(expectedText);
  });
});
