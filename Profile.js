document.addEventListener('DOMContentLoaded', (event) => {
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let age = document.getElementById('age');
    let address = document.getElementById('address');
    let phoneNo = document.getElementById('phone-no');
    let emailId = document.getElementById('email-id');
    let password = document.getElementById('password');
    let reEnterPassword = document.getElementById('re-enter-password');
    let captcha = document.getElementById('captcha');
    let captchaText = document.getElementById('captchaText');
    let registerNowBtn = document.querySelector('.register-now-btn');
    let chars = "1234567890ABCDEFGHIJKLMANOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#&";
    let captchaCode = "";

    function generateCaptcha() {
        captchaCode = "";
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * chars.length);
            captchaCode += chars[index];
        }
        captchaText.textContent = captchaCode;
    }

    function validateForm() {
        if (firstName.value === '' || lastName.value === '' || age.value === '' || address.value === '' || phoneNo.value === '' || emailId.value === '' || password.value === '' || reEnterPassword.value === '' || captcha.value === '') {
            alert('Please fill in all the fields');
            return false;
        }
        if (password.value !== reEnterPassword.value) {
            alert('Passwords do not match');
            return false;
        }
        if (captcha.value !== captchaCode) {
            alert('Invalid CAPTCHA');
            return false;
        }
        return true;
    }

    generateCaptcha();

    registerNowBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Registration successful');
            document.getElementById('registration-form').submit();
        }
    });
});
