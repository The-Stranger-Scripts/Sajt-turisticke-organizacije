const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
  e.preventDefault();

  let user = validateInputs();
  if (user !== null) {
    e.target.reset();
    Swal.fire({
      type: 'success',
      title: 'Registered',
      showConfirmButton: false,
      timer: 2500,
    }).then(() => {
      document.location.href = 'index.html';
    });
    localStorage.setItem('user', user.name);

    (async () => {
      const rawResponse = await fetch(
        'https://ng-crud-test.azurewebsites.net/users',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user }),
        }
      );
    })();
  }
});

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  err = true;

  if (usernameValue === '') {
    setError(username, 'Username is required');
    err = true;
  } else {
    setSuccess(username);
    err = false;
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
    err = true;
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
    err = true;
  } else {
    setSuccess(email);
    err = false;
  }

  if (passwordValue === '') {
    setError(password, 'Password is required');
    err = true;
  } else if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 character.');
    err = true;
  } else {
    setSuccess(password);
    err = false;
  }

  if (password2Value === '') {
    setError(password2, 'Please confirm your password');
    err = true;
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
    err = true;
  } else {
    setSuccess(password2);
    err = false;
  }
  if (!err) {
    return new User(usernameValue, emailValue, passwordValue);
  } else {
    return null;
  }
};
