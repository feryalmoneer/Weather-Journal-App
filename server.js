const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const projectData = {};

app.get('/all', (req, res) => {
  res.json(projectData);
});

app.post('/add', (req, res) => {
  const { temperature, date, userResponse } = req.body;
  projectData.temperature = temperature;
  projectData.date = date;
  projectData.userResponse = userResponse;
  res.json(projectData);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});