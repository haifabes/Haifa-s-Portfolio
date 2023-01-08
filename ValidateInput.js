function validateForm(){
    let Name = document.forms['contactForm']['name'].value;
    let Email = document.forms['contactForm']['email'].value;
    let message = document.forms['contactForm']['message'].value;

    if (Name == '' || hasNumber(Name)){
        alert('Name must be filled out and must only contain letters');
        return false;
    } else if (Email == ''){
        alert('Email must be filled out');
        return false;
    } else if (!(Email.includes('@'))){
        alert('Email does not seem to be valid');
        return false;
    } else if (message == ''){
        alert('Message must be filled out');
        return false;
    } else {
        // confirm or cancel
        return confirm('Send?')
    }
}

function hasNumber(myString) {
    return /\d/.test(myString);
}
