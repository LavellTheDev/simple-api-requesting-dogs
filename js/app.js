$.ajax({
  url:"https://dog.ceo/api/breeds/list/all",
  success:function(r){
   //console.log(r.message.bulldog[1])
   $("ol").append("<li>" + r.message.bulldog[1] + "</li>")
  },
  error:function(er){
    console.log(er);
  }

});
