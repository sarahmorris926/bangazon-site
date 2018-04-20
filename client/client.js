console.log('Is this thing on?');

document.getElementById("showLogin").addEventListener('click', () => {
  console.log('Wow, that worked!', location.origin);
  location.href = `${location.origin}/login`;
});

document.getElementById("showRegister").addEventListener('click', () => {
  location.href = `${location.origin}/register`;
});

document.getElementById("profile").addEventListener('click', () => {
  console.log("I'm in the user's profile!", location.origin);
  location.href = `${location.origin}/profile`;
});

document.getElementById("addPaymentType").addEventListener('click', () => {
  console.log("Add a payment types", location.origin);
  location.href = `${location.origin}/payment-types`;
});

document.getElementById("paymentTypeSubmit").addEventListener('click', () => {
  console.log("Payment Type Added!", location.origin);
  location.href = `${location.origin}/payment-types`;
});

