const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let surveyData = {};

app.use(bodyParser.json());

app.post('/save', (req, res) => {
  const data = req.body;
  surveyData = { ...surveyData, ...data };
  res.sendStatus(200);
});

app.post('/submit', (req, res) => {
  const data = req.body;
  surveyData = { ...surveyData, ...data };
  // In a real-world scenario, you would save the data to a database or send it via email.
  console.log('Survey Data:', surveyData);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
