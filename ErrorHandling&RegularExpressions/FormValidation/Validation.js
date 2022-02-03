// Form Blur Event Listeners
document.getElementById('Name').addEventListener('blur',validateName);
document.getElementById('ZipCode').addEventListener('blur',validateZipCode);
document.getElementById('Email').addEventListener('blur',validateEmail);
document.getElementById('Phone').addEventListener('blur',validatePhone);


function validateName() {
    const Name = document.getElementById('Name');
    const re = /^[a-zA-Z]{2,10}$/;

    if(!re.test(Name.value)){
        Name.classList.add('is-invalid');
    } else {
        Name.classList.remove('is-invalid');
    }
}

function validateZipCode() {
    const ZipCode = document.getElementById('ZipCode');
    const re = /^[0-9]{4}$/;

    if(!re.test(ZipCode.value)){
        ZipCode.classList.add('is-invalid');
    } else {
        ZipCode.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const Email = document.getElementById('Email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(Email.value)){
        Email.classList.add('is-invalid');
    } else {
        Email.classList.remove('is-invalid');
    }
}
function validatePhone() {
    const Phone = document.getElementById('Phone');
    const re = /^\(?\d{2}\)?[-. ]?\d{3}[-. ]?\d{3}$/;

    if(!re.test(Phone.value)){
        Phone.classList.add('is-invalid');
    } else {
        Phone.classList.remove('is-invalid');
    }
}