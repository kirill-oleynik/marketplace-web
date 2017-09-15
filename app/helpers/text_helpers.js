import curry from 'lodash/curry';
import truncate from 'lodash/truncate';

const truncateText = curry((separator, text, length) => (
  truncate(text, {
    length,
    separator,
    omission: ' ...'
  })
));

export const truncateParagraph = truncateText('. ');
