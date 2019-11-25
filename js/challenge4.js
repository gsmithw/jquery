// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
//
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }
//
//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }
//
//     return validInput;
// }



$('form').submit(function( event ) {

  // event.preventDefault();
  var name = $("#fullname").val()
  var address = $("#streetaddr").val()
  var isValid = true;

  if (name == ""){
      $("#nameerrormsg").css("display","block")
      isValid = false;

  }
  else {
      $("#nameerrormsg").css("display","none")
      isValid = true;
  }

  if (address == ""){
      $("#addrerrormsg").css("display","block")
      isValid = false;

  }
  else {
      $("#addrerrormsg").css("display","none")
      isValid = true;
  }
return isValid;




})
