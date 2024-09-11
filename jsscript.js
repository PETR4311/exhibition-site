document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Валидация полей
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Пример отправки формы через AJAX 
    fetch('/submit', {
        method: 'POST',
        body: JSON.stringify({
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            email: email,
            phone: phone
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('success-message').style.display = 'block';
            document.getElementById('registration-form').reset();
        }
    });
});