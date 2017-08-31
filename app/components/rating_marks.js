import React from 'react';
import RatingMarksItem from './rating_marks_item';

const RatingMarks = () => (
  <table
    cellSpacing="0"
    cellPadding="0"
  >
    <tbody>
      <RatingMarksItem />
      <RatingMarksItem />
      <RatingMarksItem />
      <RatingMarksItem />
      <RatingMarksItem />
    </tbody>
  </table>
);

export default RatingMarks;
