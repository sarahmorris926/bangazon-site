window.addEventListener("click", function(event) {
    let productId = event.target.id;
    console.log("product id", productId);
    fetch(`/myproducts/${productId}`, {
        method: 'delete'
    });
});



