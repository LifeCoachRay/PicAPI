const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

app.use(bodyParser.json());

app.post('/send_picture', (req, res) => {
  // Get the image data from the request
  const imageData = req.body.image_data;

  // Decode the image data and save it to a file
  const buffer = Buffer.from(imageData, 'base64');
  fs.writeFileSync(path.join(__dirname, 'image.jpg'), buffer);

  res.send({ status: 'success' });
});

app.get('/get_picture', (req, res) => {
  // Read the image file and encode it as base64
  const imageData = fs.readFileSync(path.join(__dirname, 'image.jpg'));
  const base64Data = imageData.toString('base64');

  res.send({ image_data: base64Data });
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
