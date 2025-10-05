const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/predict", (req, res) => {
  const { coin } = req.body;
  const predictions = [
    "likely to rise 3.2% in next 6 hours",
    "might drop 2.1% in next 4 hours",
    "expected to stay stable with minor growth",
    "possible breakout soon — monitor closely",
  ];
  const randomPrediction =
    predictions[Math.floor(Math.random() * predictions.length)];

  res.json({
    prediction: `${coin || "Crypto"} is ${randomPrediction}`,
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
