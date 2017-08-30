export default function requestMiddleware() {
  return (next) => (action) => {
    const {
      type,
      payload = {}
    } = action;

    const { request } = payload;

    if (!request) {
      return next(action);
    }

    const REQUEST_TYPE = `${type}_REQUEST`;
    const SUCCESS_TYPE = `${type}_SUCCESS`;
    const FAILURE_TYPE = `${type}_FAILURE`;

    next({
      payload,
      type: REQUEST_TYPE
    });

    return request
      .then((response) => next({
        type: SUCCESS_TYPE,
        payload: {
          response,
          data: response.data
        }
      }))
      .catch((exception) => {
        next({
          type: FAILURE_TYPE,
          payload: {
            response: exception.response,
            error: exception.response.data.error
          }
        });

        return Promise.reject(exception);
      });
  };
}
