import React from 'react';

const RatingMarksItem = () => (
  <tr className="rating-marks">
    <td>
      <span className="font-12 mr-20">5 stars</span>
    </td>
    <td>
      <div className="relative">
        <div className="rating-marks__line" />
        <div className="rating-marks__line-value" style={{ width: '50%' }} />
      </div>
    </td>
    <td>
      <div className="rating-marks__value">1,608</div>
    </td>
  </tr>
);

export default RatingMarksItem;
