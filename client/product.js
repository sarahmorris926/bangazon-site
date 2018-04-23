document.getElementById("addToOrder").addEventListener('click', ()=>{
  $.ajax({
    url:`${location.origin}/cart`,
    type:'post',
    data:{}
  }) 
});