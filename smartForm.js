// Your jQuery goes here

var userData = {
  name:""
  email:""
};
$("#startBtn").click(function(event)
 {
   console.log("start clicked")
   $("#welcome").hide();
   $("#q1").show();


});
$("startBtn").click(function(event)){
  console.log($("#name")).val());
  if($("#name").val())
  {
    userData.name=$("#name").val();

  }
});
$("#email").change(function(event))
{

});
