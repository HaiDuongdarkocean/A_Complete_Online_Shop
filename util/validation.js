function isEmpty(value) {
  return !value || value.trim() === "";
}

function userCredentialValid(email, password) {
  return email && email.includes("@") && password.trim().length > 5;
}

function userDetailsAreValid(email, password, name, street, postal, city) {
  return (
    userCredentialValid(email, password) &&
    !isEmpty(name) &&
    !isEmpty(street) &&
    !isEmpty(postal) &&
    !isEmpty(city)
  );
}

function emailIsConfirmed(email, confirmEmail) {
  return email === confirmEmail;
}

module.exports = { userDetailsAreValid, emailIsConfirmed };
