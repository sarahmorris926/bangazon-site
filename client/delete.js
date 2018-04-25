window.addEventListener("click", function(event) {
    if (event.target.id > 0) {
        let productId = event.target.id;
        console.log("product id", productId);
        fetch(`/myproducts/${productId}`, {
            method: 'delete',
            credentials: "include"
        })
        .then( function(response) {
            document.location.reload(true);
            console.log("response", response);
            return response;
        })
        .catch( error => {
            console.log("are you the JSON issue", error);
        }) 
    }
});



