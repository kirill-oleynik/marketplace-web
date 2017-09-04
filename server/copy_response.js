module.exports = function copyResponse(original, target) {
  target.status(original.status);

  Object
    .keys(original.headers)
    .filter((header) => header !== 'transfer-encoding')
    .forEach((header) => target.set(header, original.headers[header]));

  return target;
};
