window.addEventListener("click", function(event) {
    if (+event.target.id > 0) {
        console.log("event.target.id", event.target.id);
        console.log("what is this", typeof +event.target.id)
        let productId = event.target.id;
        console.log("product id", productId);
        fetch(`/myproducts/${productId}`, {
            method: 'delete',
            credentials: "include"
        })
        .then( function(response) {
            // window.location.reload(true);
            console.log("response", response);
            return response;
        })
        .catch( error => {
            console.log("are you the JSON issue", error);
        }) 
    }
});



