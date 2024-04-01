# DIGIBHEM-task-2
Creating a simple Hotel-Booking-Registration-form by using HTML,CSS and JAVASCRIPT
HTML: 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hotel Booking Registration</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hotel Booking Registration</h1>
  <form id="booking-form">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="check-in">Check-In Date:</label>
    <input type="date" id="check-in" name="check-in" required>

    <label for="check-out">Check-Out Date:</label>
    <input type="date" id="check-out" name="check-out" required>

    <label for="guests">Number of Guests:</label>
    <select id="guests" name="guests">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>

    <button type="submit">Register</button>
  </form>

  <p id="message"></p>

  <script src="script.js"></script>
</body>
</html>

CSS :

body {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 20px;
  }
  
  input[type="text"], input[type="email"], input[type="date"] {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  select {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button[type="submit"] {
    margin-top: 30px;
    padding: 10px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #45a049;
  }
  
  #message {
    margin-top: 30px;
    color: green;
  }

JAVASCRIPT :
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var checkIn = document.getElementById('check-in').value;
    var checkOut = document.getElementById('check-out').value;
    var guests = document.getElementById('guests').value;
  
    document.getElementById('message').textContent = 'Registration successful! Name: ' + name + ', Email: ' + email + ', Check-In: ' + checkIn + ', Check-Out: ' + checkOut + ', Guests: ' + guests;
  });
