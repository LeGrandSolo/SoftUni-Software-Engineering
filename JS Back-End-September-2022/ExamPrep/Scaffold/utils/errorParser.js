function parseError(error) {
  const result = { messages: [], fields: {} };
  if (error.name == "ValidationError") {
    const errors = error.errors;
    for (field in errors) {
      //result.fields[field] = field;
      result.messages.push(errors[field].message);
    }
  } else if (Array.isArray(error)) {
    for (const err of error) {
      if (!result.messages.includes(err.msg)) {
        result.messages.push(err.msg);
      }
      //result.fields[err.param] = err.param;
    }
  } else {
    result.messages.push(error.message);
    //result.fields = error.fields;
  }
  return result;
}

module.exports = parseError;
