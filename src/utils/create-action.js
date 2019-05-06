function identity(x) {
  return x;
}

function isCorrectActionBody(value) {
  return Object.keys(value).every(
    key => key === 'error' || key === 'payload' || key === 'index'
  );
}

export default (type, createActionBody = identity) => arg => {
  if (typeof createActionBody !== 'function') {
    throw new Error('The createActionBody must be a function or undefined');
  }

  if (arg === undefined || arg === null) {
    return { type };
  }

  const body = createActionBody(arg);

  if (!isCorrectActionBody(body)) {
    throw new Error('The illegal payload format');
  }

  return { type, ...body };
};
