const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('/status', (req, res) => {
  res.send({
    message:'Hello from Express server!'
  });
})

app.listen(process.env.PORT || 8081);
