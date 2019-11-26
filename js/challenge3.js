// ch3form.onsubmit = function() {
//     var fruit =
//     document.querySelectorAll('input[name="fruit"]')
//
//
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//
//     alert("You must pick a fruit!")
//     return false;
//
//
//     // Advanced Answer
//     // if(document.querySelector('input[name="fruit"]:checked'))
//     //     return true;
//
//     // alert("You must pick a fruit!")
//     // return false;
//   }

  $("form").submit(function( event ) {

    if ($("input[name='fruit']").is(':checked')){
      return true;
    }

    else {
      alert("You must pick a fruit!")
    }


    if ($("input[name='standing']").is(':checked')){
      return true;
    }

    else {
      alert("You must pick a standing!")
    }

    return false;

  })
  //
  //   var fruit = $("input[name='fruit']")
  //   var stand = $("input[name='standing']")
  //
  //   for (let i = 0; i < fruit.length;i++){
  //       if (fruit[i].checked)
  //           return true;
  //   }
  //   alert("You must pick a fruit!")
  //   return false;
  //
  // })
