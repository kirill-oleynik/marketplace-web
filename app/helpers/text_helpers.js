import curry from 'lodash/curry';
import truncate from 'lodash/truncate';

const truncateText = curry((separator, text, length) => (
  truncate(text, {
    length,
    separator,
    omission: ' ...'
  })
));

const replaceText = curry((rule, replaceValue, text) => (
  text.replace(rule, replaceValue)
));

const prependText = curry((prependValue, text) => (prependValue + text));
const appendText = curry((appendValue, text) => (text + appendValue));

export const truncateParagraph = truncateText('. ');

export const humanizeUrl = replaceText(/(^\w+:|^)\/\//, '');

export const emailLink = prependText('mailto:');

export const phoneLink = prependText('tel:');

export const asPercentage = appendText('%');
