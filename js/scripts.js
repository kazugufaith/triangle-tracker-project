function tracker() {
  //Initialize 3 sides
  var side1 = document.getElementById("sideA").value;
  var side2 = document.getElementById("sideB").value;
  var side3 = document.getElementById("sideC").value;
  //Change input to integer value
  var sideA = parseInt(side1);
  var sideB = parseInt(side2);
  var sideC = parseInt(side3);
  //Check if entry is present and is a number(Obselete because input field only accepts numbers)
  function inputCheck() {
    //Ensure input is
    if (!sideA || !sideB || !sideC || sideA < 0 || sideB < 0 || sideC < 0) {
      document.getElementById('result').innerHTML = "Enter valid numbers";
    } else {
      triangleCheck(); //runs triangleCheck if input is validated
      display();
    }
  }
  inputCheck();
  //Business logic
  function triangleCheck() {
    //Array for triangle types
    var triangleTypes = ["equilateral", "issosceles", "scalene"];
    //Test triangles for type
    if ((sideA + sideB) <= sideC || (sideB + sideC) <= sideA || (sideA + sideC) <= sideB) {
      document.getElementById('result').innerHTML = "This is NOT a triangle"; //Display if not triangle
    }
    else if(sideA === sideB && sideB === sideC && sideA === sideC){
     document.getElementById('result').innerHTML = "This is an " + triangleTypes[0] + " triangle"; var div = document.getElementById("props"); div.classList.remove("properties"); div.classList.add("properties2");var div = document.getElementById("equilateral"); div.classList.remove("property"); div.classList.add("property2");//Display if equilateral
   }
   else if(sideA === sideB || sideB === sideC || sideA === sideC){
     document.getElementById('result').innerHTML = "This is an " + triangleTypes[1] + " triangle"; var div = document.getElementById("props"); div.classList.remove("properties"); div.classList.add("properties2"); var div = document.getElementById("issosceles"); div.classList.remove("property"); div.classList.add("property2");//Display if equilateral//Display if issosceles
   }
   else{
     document.getElementById('result').innerHTML = "This is a " + triangleTypes[2] + " triangle"; var div = document.getElementById("props"); div.classList.remove("properties"); div.classList.add("properties2"); var div = document.getElementById("scalene"); div.classList.remove("property"); div.classList.add("property2");//Display if equilateral//Display if scalene
   }
 }
}

function myPage(){
  location.reload(true);
}
