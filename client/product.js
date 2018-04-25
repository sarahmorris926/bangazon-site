
document.getElementById("addToOrder").addEventListener('click', (e)=>{
  console.log(e, "e");
  console.log(e.target.baseURI.split("/"));

  let id = +e.target.baseURI.split("/")[4];
  $.ajax({
    url:`${location.origin}/cart/${id}`,
    type:'post',
    data:{}
  }) 

});
