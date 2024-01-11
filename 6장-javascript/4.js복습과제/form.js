document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('pw').value;
    const rePassword = document.getElementById('re-pw').value;
    const firstNumber = document.getElementById('firstnumber').value;
    const middleNumber = document.getElementById('middlenumber').value;
    const lastNumber = document.getElementById('lastnumber').value;
    const submit_certificationCode = document.querySelector('.certification button[name=submit-certification').value;
    const confirm_certificationCode = document.querySelector('.certification button[name=confirm-certification').value;
    const location = document.getElementById('location').value;

    const genderInputs = document.querySelectorAll('.gender input[name="gender"]');
    let gender;
    for (const input of genderInputs) {
        if (input.checked) {
            gender = input.value;
            break;
        }
    }
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Password:', password);
    console.log('Re-entered Password:', rePassword);
    console.log('Phone Number:', firstNumber);
    console.log('Phone Number:', middleNumber);
    console.log('Phone Number:', lastNumber);
    console.log('Certification Code:', submit_certificationCode);
    console.log('Certification Code:', confirm_certificationCode);
    console.log('Location:', location);
    console.log('Gender:', gender);
}