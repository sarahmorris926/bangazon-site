
window.addEventListener('click',(e)=>{
  console.log(e.target.id, "e.target.id");
  let id = +e.target.id;
    $.ajax({
      url:`${location.origin}/cart/${id}`,
      type:'post',
      data:{}
    }) 
})