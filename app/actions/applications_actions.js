import { APPLICATION_FETCH } from '../constants';

export const fetch = (applicationId) => ({
  type: APPLICATION_FETCH,
  payload: {
    id: applicationId
  }
});
