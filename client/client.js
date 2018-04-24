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

// document.getElementsByClassName("productDelete").addEventListener('click', function() {
//   console.log("This is the event", event.currentTarget);
// })

// window.addEventListener("click", function(event) {
//     let productId = event.currentTarget;
//     console.log("product id", productId);
// });





