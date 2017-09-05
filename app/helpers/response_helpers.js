export const getResponseData = (response) => response.data.data;
export const getResponseError = (exception) => ({
  response: exception.response,
  error: exception.response.data.error
});
