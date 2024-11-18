document.getElementById('validationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let password = document.getElementById('password').value;

  const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    alert('nieprawidłowy mail');
    return;
  }

  const phoneRegex = /^(\d{3}\s?){2}\d{3}$/;
  if (!phoneRegex.test(phone)) {
    alert('nieprawidłowy telefon');
    return;
  }

  const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,20}$/;
  if (!passwordRegex.test(password)) {
    alert('nieprawidłowe hasło');
    return;
  }

  alert('formularz wysłany');
});
