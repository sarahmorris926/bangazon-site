document.getElementById("completeOrder").addEventListener('click', (e) => {
    let pay = document.getElementById('paymentTypes');
    let order = document.getElementById('completeOrder');
    console.log(pay);
    pay.classList.toggle('isHidden');
    order.classList.toggle('isHidden');
    });

document.getElementsByClassName("payClick")[0].addEventListener('click', (e) => {
    let id = +e.target.id;
    $.ajax({
        url:`${location.origin}/payment/${id}`,
        type:'patch',
        data:{}
    })
})