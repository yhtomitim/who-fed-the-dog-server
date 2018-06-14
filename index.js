const app = require('./app');
const port = process.env.PORT || 8080;

app.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, `listening on ${port}`));