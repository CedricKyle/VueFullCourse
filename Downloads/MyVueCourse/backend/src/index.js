const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

// app.post('/status', (req, res) => {
//   res.send({
//     message:'Hello from Express server!'
//   });
// })


// using post request
app.post('/register', (req, res) => {
  res.send({
    message:`Hello, ${req.body.email} from Express server! You have registered`
  });
})

app.listen(process.env.PORT || 3000);
