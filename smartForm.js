// Your jQuery goes here

var userData = {
  name:"",
  email:"",
  html:{likes:[],dislikes:[]},
  css:{likes:[],dislikes:[]},
  js:{likes:[],dislikes:[]},
  skills:{html:"",css:"",js:""},
  surveyState:[false,false,false,false,false]
};
var form_checker=[false,false,false];

$(document).ready(function()
{
  if(userData.surveyState[0]==true)
  {
    $("#name").val()=userData.name;
    $("#exampleInputEmail1").val()=userData.email;
  }
  if(userData.surveyState[1]==true)
  {
    $("#likesHTML")==userData.html.likes;
    $("#DlikesHTML")==userData.html.dislikes;
  }
  if(userData.surveyState[2]==true){
    $("#likesCSS")==userData.css.likes;
    $("#DlikesCSS")==userData.css.dislikes;
  }
  if(userData.surveyState[3]==true)
  {
    $("#likesJS")==userData.js.likes;
    $("#DlikesJS")==userData.js.dislikes;
  }
  else{
    console.log("Its not done");
  }
});
$("#startButton").click(function(){
  //$("#welcome").animate({left: '250px'});
  $("#welcome").fadeToggle("slow");
  $("#q1").fadeIn(3000);

  //$("#q1").show();
});



function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateName(name)
{
				var re = /^[A-z ]+$/;
				return re.test(name);
}

$("#question2ButtonNext").click(function()
{
  var name = $("#name").val();
  var email = $("#exampleInputEmail1").val();
  if(name.length==0 )
  {
    alert("Sorry have to give user name");
    $('#name').focus();
  }
  else if(name.length==0)
  {
    alert("Sorry have to give user name");
    $('#name').focus();
  }
  else if(email.length==0)
  {
    alert("Sorry have to give email");
    $('#exampleInputEmail1').focus();
  }
  else if(!validateEmail(email)){
    alert("Sorry have to give a valid email");
    $('#exampleInputEmail1').focus();
  }
  else if(validateEmail(email) && validateName(name)){
    userData.surveyState[0]=true;
    userData.name= $("#name").val();
    userData.email= $("#exampleInputEmail1").val();
    window.localStorage.userData = JSON.stringify(userData);
    $("#q1").slideUp("slow");
    $("#q2").slideDown("slow");
  }
});


$("#Htmlbutton").click(function(){
  $("#q2").fadeOut("slow");
  $("#q2a").fadeIn("slow");
});
$("#Cssbutton").click(function(){
  $("#q2").slideUp();
  $("#q2b").slideDown();
});
$("#Jsbutton").click(function(){
  $("#q2").slideUp();
  $("#q2c").slideDown();
});

var htmlclick=0;
		$(':checkbox[name=likesHTML]').click(function() {
			if (this.checked) {
        htmlclick+=1;
				userData.html.likes.push(this.value);
			}
    });
    $(':checkbox[name=DlikesHTML]').click(function() {
			if (this.checked) {
        htmlclick+=1;
				userData.html.dislikes.push(this.value);
			}
    });


    $("#Htmlnext").click(function(){
      form_checker[0]=true;
      if(form_checker[0]==true && form_checker[1]==true &&form_checker[2]==true)
      {
        userData.surveyState[1]=true;
        $("#q2a").fadeOut("slow");
        $("#q3").fadeIn("slow");
      }
      else {
        if(htmlclick<2)
        {
          alert("You have to fill all the questions");
        }
        else {
          userData.surveyState[1]=true;
          window.localStorage.userData = JSON.stringify(userData);
          $("#q2a").fadeOut("slow");
          $("#q2b").fadeIn("slow");
        }
      }
    });


		$(':checkbox[name=likesCSS]').click(function() {
			if (this.checked) {
				userData.css.likes.push(this.value);
			}
    });
    $(':checkbox[name=DlikesCSS]').click(function() {
			if (this.checked) {
				userData.css.dislikes.push(this.value);
			}
    });

    $("#Cssnext").click(function(){
      form_checker[1]=true;
      if(form_checker[0]==true && form_checker[1]==true &&form_checker[2]==true)
      {
        userData.surveyState[2]=true;
        $("#q2b").slideUp();
        $("#q3").slideDown();
      }
      else{
        userData.surveyState[2]=true;
        window.localStorage.userData = JSON.stringify(userData);
        $("#q2b").slideUp();
        $("#q2c").slideDown();

      }
    });

		$(':checkbox[name=likesJS]').click(function() {
			if (this.checked) {
				userData.js.likes.push(this.value);
			}
    });

    $(':checkbox[name=DlikesJS]').click(function() {
			if (this.checked) {
				userData.js.dislikes.push(this.value);
			}
    });

    $("#Jsnext").click(function(){
      form_checker[2]=true;
      if(form_checker[0]==false)
      {
        userData.surveyState[3]=true;
        window.localStorage.userData = JSON.stringify(userData);
        $("#q2c").fadeOut("slow");
        $("#q2a").fadeIn("slow");
      }

      else if(form_checker[0]==true && form_checker[1]==true &&form_checker[2]==true)
      {
        userData.surveyState[3]=true;
        $("#q2c").fadeOut("slow");
        $("#q3").fadeIn("slow");
      }
      });

      $(':radio[name=hinlineRadioOptions]').click(function() {
  			if (this.checked) {
  				userData.skills.html=this.value;
  			}
      });
      $(':radio[name=cinlineRadioOptions]').click(function() {
  			if (this.checked) {
  				userData.skills.css=this.value;
  			}
      });
      $(':radio[name=jinlineRadioOptions]').click(function() {
  			if (this.checked) {
  				userData.skills.js=this.value;
  			}
      });

      $("#q3next").click(function(){
        userData.surveyState[4]=true;
        window.localStorage.userData = JSON.stringify(userData);
        $("#q3").slideUp();
        $("#thanks").slideDown();
      });

$("#Htmlprev").click(function(){
  $("#q2a").fadeOut("slow");
  $("#q2").fadeIn("slow");
});
$("#Cssprev").click(function(){
  $("#q2b").slideUp();
  $("#q2a").slideDown();
});
$("#Jsprev").click(function(){
  $("#q2c").fadeOut("slow");
  $("#q2b").fadeIn("slow");
});

$("#q3prev").click(function(){
  $("#q3").fadeIn("slow");
  $("#q2").fadeOut("slow");
});

$("#answer").click(function(){
			$("#show").show("slow");
			$("#show").html(JSON.stringify(userData.name, null, 2));

});

$("#delete").click(function(){
      localStorage.removeItem(userData);
      userData={
      name:"",
      email:"",
      html:{likes:[],dislikes:[]},
      css:{likes:[],dislikes:[]},
      js:{likes:[],dislikes:[]},
      skills:{html:"",css:"",js:""},
      surveyState:[false,false,false,false,false]
    };
			$("#show").slideUp("slow");
});

$("#initial").click(function(){
			$("#show").fadeOut("slow");
			$("#thanks").slideUp("slow");
      $("#welcome").slideDown("slow");
      location.reload();
});
