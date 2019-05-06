const renderer = require('./server');
const config = require('../webpack/dev.config');

const port = 3000;

const app = renderer(config);

/* eslint-disable no-console */
app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Server started at http://localhost:${port}`);
});
/* eslint-enable no-console */
