function newErrorWithFields(message, ...fields) {
  const error = new Error(message);
  error.fields = {}
  for (const field of fields) {
    error.fields[field] = field
  }
  return error;
}
module.exports = newErrorWithFields;
