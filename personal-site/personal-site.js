const form = document.getElementById('signupForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;   

    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const option = document.getElementById('option').value;   


    // Here, you can process the form data, e.g., send it to a server
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Option: ${option}`);

    // You can also clear the form fields after submission
    form.reset();
});