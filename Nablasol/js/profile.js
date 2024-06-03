function validateForm() {
    var firstName = document.getElementById('first-name').value.trim();
    var lastName = document.getElementById('last-name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phoneNumber = document.getElementById('phone-number').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirmPassword = document.getElementById('confirm-password').value.trim();

    var valid = true;

    
    document.querySelectorAll('.error-message').forEach(function(span) {
        span.textContent = '';
    });

    
    if (firstName === '') {
        document.getElementById('first-name-error').textContent = 'Please enter your first name';
        valid = false;
    }

    
    if (lastName === '') {
        document.getElementById('last-name-error').textContent = 'Please enter your last name';
        valid = false;
    }

  
    if (email === '') {
        document.getElementById('email-error').textContent = 'Please enter your email';
        valid = false;
    }

    
    if (phoneNumber === '') {
        document.getElementById('phone-number-error').textContent = 'Please enter your phone number';
        valid = false;
    }

    
    if (password === '') {
        document.getElementById('password-error').textContent = 'Please enter a password';
        valid = false;
    }

    
    if (confirmPassword === '') {
        document.getElementById('confirm-password-error').textContent = 'Please re-enter your password';
        valid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
        valid = false;
    }

    if (valid) {
        
        var userData = {
            'first-name': firstName,
            'last-name': lastName,
            'email': email,
            'phone-number': phoneNumber,
            'password': password
        };

        localStorage.setItem('user', JSON.stringify(userData));

        
        var storedUserData = JSON.parse(localStorage.getItem('user'));
        console.log('Stored User Data:', storedUserData);

        
        alert('Data stored in local storage.');

        window.location.href = "/Businessinfo.html";
        return true
    }
}