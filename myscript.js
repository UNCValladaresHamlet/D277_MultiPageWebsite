//  Include JavaScript code that verifies the email fields match when a user enters a second email address.
document.getElementById('userForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;

    if (email !== confirmEmail) {
        alert('Email addresses do not match. Please enter matching email addresses.');
        event.preventDefault();
    }
});
