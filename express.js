// Importing necessary packages
const express = require('express');
const multer = require('multer');
const tf = require('@tensorflow/tfjs-node');
const sharp = require('sharp');
const predictImageContents = require('./TensorFlow')

// Creating an Express application
const app = express();

// Creating a multer instance with memory storage
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// POST route for uploading an image and predicting its contents
app.post('/image', upload.single('image'), async (req, res) => {
    const buffer = req.file.buffer;
    const decodedImage = tf.node.decodeImage(buffer);
    // Checking if the image type is supported
    if (!/^image\/(jpe?g|png|gif)$/i.test(req.file.mimetype)) {
        console.log('Unsupported image type');
        res.json({ error: "Unsupported image type" })
        return;
    }
    // Resizing the image to 224x224 and converting it to a buffer
    const resizedImage = await sharp(req.file.buffer)
        .resize(224, 224)
        .toBuffer();

    // Predicting the image contents using the TensorFlow model
    const result = await predictImageContents(resizedImage);

    // Sending the predicted result back as a response
    res.send(result);
});

// Setting the view engine to ejs
app.set('view engine', 'ejs');

// GET route for rendering the index page
app.get('/', (req, res) => {
    res.render('index');
})

// Starting the Express server on port 3000
app.listen(3000, () => {
    console.log('Server listening on port 3000!');
});

