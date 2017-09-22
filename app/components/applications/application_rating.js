import React from 'react';
import PropTypes from 'prop-types';
import RatingPreview from './rating_preview';
import { averageRating, votePercentage } from '../../helpers/number_helpers';

export const ApplicationRating = ({ t, data }) => (
  <div className="mr-70">
    <p className="font-16 font-700 mb-20">
      {t('appProfile.ratings.avarage')}
    </p>

    <div className="d-flex mb-30">
      <div className="mr-25">
        <p className="font-54 lh-1-2 in-black-050 mb-10">
          {averageRating(data.average)}
        </p>

        <RatingPreview
          t={t}
          total={data.total}
          average={data.average}
          className="rating--sm"
        />
      </div>

      <div>
        <table
          cellSpacing="0"
          cellPadding="0"
        >
          <tbody>
            {
              [5, 4, 3, 2, 1].map((index) => (
                <tr
                  key={index}
                  className="rating-marks"
                >
                  <td>
                    <span className="font-12 mr-20">
                      {t('appProfile.ratings.votesPoints', { value: index })}
                    </span>
                  </td>

                  <td>
                    <div className="relative">
                      <div className="rating-marks__line" />

                      <div
                        className="rating-marks__line-value"
                        style={{
                          width: votePercentage(data.votes, index)
                        }}
                      />
                    </div>
                  </td>

                  <td>
                    <div className="rating-marks__value">
                      {data.votes[index]}
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

ApplicationRating.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default ApplicationRating;
