window.addEventListener("click", function(event) {
    let productId = event.target.id;
    console.log("product id", productId);
    fetch(`/myproducts/${productId}`, {
        method: 'delete',
        credentials: "include"
    })
    .then( function(response) {
        window.location.reload(true);
        // console.log("response", response);
        return response;
    })
    .catch( error => {
        console.log("are you the JSON issue", error);
    })
});



