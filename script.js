function validateForm(event) {
    event.preventDefault();

    // Reset error and success messages
    document.getElementById('errorMessages').innerHTML = '';
    document.getElementById('successMessage').innerHTML = '';
    
    // Get form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError('Invalid email address');
        return;
    }

    // Validate other required fields
    if (!name || !email || !message) {
        displayError('All fields are required');
        return;
    }

    // Form is valid, show success message
    document.getElementById('successMessage').innerHTML = 'Form submitted successfully!';
}

function displayError(message) {
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = message;
    errorMessages.classList.remove('hidden');
}
