export const getUrlParams = url => {
  const urlPath = url.replace(/^\?/, '');

  if (!urlPath.length) {
    return [];
  }

  const pairStrings =
    urlPath.indexOf('&') === -1 ? [urlPath] : urlPath.split('&');

  const pairs = pairStrings.map(p => {
    const pair = p.split('=');

    return { Name: pair[0], Value: pair[1] };
  });

  return pairs;
};

export const getParamByName = (url, paramName) => {
  const pairs = getUrlParams(url);

  if (pairs.length) {
    const pair = pairs.find(p => p.Name === paramName);

    return pair ? pair.Value : null;
  }

  return null;
};

export const getReturnUrl = url => {
  return getParamByName(url, 'return');
};

export default {
  getUrlParams,
  getParamByName,
  getReturnUrl,
};
