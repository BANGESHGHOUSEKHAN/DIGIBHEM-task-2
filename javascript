document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var checkIn = document.getElementById('check-in').value;
    var checkOut = document.getElementById('check-out').value;
    var guests = document.getElementById('guests').value;
  
    document.getElementById('message').textContent = 'Registration successful! Name: ' + name + ', Email: ' + email + ', Check-In: ' + checkIn + ', Check-Out: ' + checkOut + ', Guests: ' + guests;
  });
