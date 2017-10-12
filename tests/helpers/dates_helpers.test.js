import { asFoundedDate } from 'app/helpers/dates_helpers';

describe('#asFoundedDate', () => {
  describe('when given string is valid date', () => {
    it('applies right format', () => {
      expect(asFoundedDate('2014-05-24')).toEqual('May, 24 2014');
      expect(asFoundedDate('2014/05/24')).toEqual('May, 24 2014');
      expect(asFoundedDate('2014 May 24')).toEqual('May, 24 2014');
      expect(asFoundedDate('24 May 2014')).toEqual('May, 24 2014');
      expect(asFoundedDate('May, 24 2014')).toEqual('May, 24 2014');
    });
  });

  describe('when given string is not a valid date', () => {
    it('returns empty string', () => {
      expect(asFoundedDate('invalid')).toEqual('');
    });
  });
});
