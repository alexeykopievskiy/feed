module.exports = ({ markup, helmet, preloadedState, clientBuildHash }) => {
  return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="maximum-scale=1.0,width=device-width,initial-scale=1.0,user-scalable=0">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
    </head>
    <body>
        <main role="main" id="root">${markup}</main>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(
    preloadedState
  )};</script>
        <script src="/js/bundle.${clientBuildHash}.js"></script>
    </body>
</html>`;
};
