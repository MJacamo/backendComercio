const express = require('express');
const app = express();
const cors = require('cors');


const { port } = require('./config');
const appRouter = require('./src/routes/index');

app.use(cors())
app.use(express.json());

app.use('/api', appRouter);

app.listen(port, () => {
  console.log('Server listen on port', port);
});