function trimFields(fieldsAsObj, ...excluding) {
  const objectEntries = [];
  for (const entries of Object.entries(fieldsAsObj)) {
    if (!excluding.includes(entries[0])) {
      objectEntries.push([entries[0], entries[1].trim()]);
    }
  }
  return Object.fromEntries(objectEntries);
}
module.exports = trimFields;
