<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sentayhu's Image Recognition</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<h1>Image recogntion System</h1>
<p>Welcome to image recognition system </p>
<form>
  <input type="file" id="image">
  <button type="submit" id="submit">Submit</button>
</form>
<h2 id="info"></h2>
</body>
</html>
<script>
// Get the HTML elements
const form = document.querySelector('form');
const imageInput = document.querySelector('#image');
const submitButton = document.querySelector('#submit');
const info = document.querySelector('#info');
const url = "http://localhost:3000/image";

// Add event listener to submit button
submitButton.addEventListener('click', async (event) => {
  // Show loading message
  info.textContent = "Loading...";
  event.preventDefault();
  const formData = new FormData();
  formData.append('image', imageInput.files[0]);
  
  // Send POST request to the server
  const response = await fetch(url, {
    method: 'POST',
    body: formData
  });
  
  // Get the prediction result
  const result = await response.json();
  console.log(result);
 
  // Update the UI with the predicted label
  info.textContent = result.label;
});
</script>

