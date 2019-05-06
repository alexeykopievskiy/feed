const CAMEL_CASE_BORDER = /([a-z])([A-Z])/g;
const REPLACER = '$1 $2';

export default name =>
  String(name)
    .replace(CAMEL_CASE_BORDER, REPLACER)
    .replace(/\s+/g, '_')
    .toUpperCase();
