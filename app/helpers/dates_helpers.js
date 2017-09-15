import curry from 'lodash/curry';
import flow from 'lodash/flow';

const isValidDate = (dateString) => !isNaN(Date.parse(dateString));

const formatDate = curry((formatFn, dateString) => (
  isValidDate(dateString) ? formatFn(dateString) : ''
));

const fullDate = (dateString) => new Date(dateString).toString();
const truncateDay = (dateString) => dateString.slice(4, -1);
const formatMonth = (dateString) => (
  `${dateString.slice(0, 3)}, ${dateString.slice(4, -1)}`
);
const truncateTime = (dateString) => dateString.slice(0, 12);

export const asFoundedDate = formatDate(flow([
  fullDate,
  truncateDay,
  formatMonth,
  truncateTime
]));
