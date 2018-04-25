console.log('Is this thing on?');

document.getElementById("showLogin").addEventListener('click', () => {
  console.log('Wow, that worked!', location.origin);
  location.href = `${location.origin}/login`;
});

document.getElementById("showRegister").addEventListener('click', () => {
  location.href = `${location.origin}/register`;
});

document.getElementById("sellProductSubmit").addEventListener('click', () => {
  location.href = `${location.origin}/product/${id}`
});

document.getElementById("returnToPaymentType").addEventListener('click', () => {
  location.href = `${location.origin}/payment-types`;
});

document.getElementById("completeOrder").addEventListener('click', () => {
  console.log('tight');
})




