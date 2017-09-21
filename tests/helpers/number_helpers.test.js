const {
  averageRating, roundedRating, votePercentage
} = require('../../app/helpers/number_helpers');

describe('#averageRating', () => {
  it('turns given integer to float with precision 1', () => {
    expect(averageRating(1)).toEqual(1.0);
  });

  it('turns given float to float with precision 1', () => {
    expect(averageRating(1.5454)).toEqual(1.5);
  });
});

describe('#roundedRating', () => {
  it('turns given integer to float with precision 1', () => {
    expect(roundedRating(1)).toEqual(1);
  });

  it('turns given float to float with precision 1', () => {
    expect(roundedRating(1.22)).toEqual(1);
  });
});

describe('#votePercentage', () => {
  const collection = {
    1: 25,
    2: 25,
    3: 50
  };

  const nullCollection = {
    1: 0,
    2: 0,
    3: 0
  };

  it('returns percentage value of given item in collection', () => {
    expect(
      votePercentage(collection, 1)
    ).toEqual('25%')

    expect(
      votePercentage(collection, 3)
    ).toEqual('50%')

    expect(
      votePercentage(nullCollection, 3)
    ).toEqual('0%')
  });
});
