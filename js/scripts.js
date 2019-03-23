function tracker(){
  //Initialize 3 sides
    var side1 = document.getElementById("sideA").value;
    var side2 = document.getElementById("sideB").value;
    var side3 = document.getElementById("sideC").value;
  //Change input to integer value
    var sideA = parseInt(side1);
    var sideB = parseInt(side2);
    var sideC = parseInt(side3);
    //Check if entry is present and is a number(Obselete because input field only accepts numbers)
 function inputCheck(){
   //Ensure input is
   if(!sideA || !sideB || !sideC || sideA<0 ||sideB<0 ||sideC<0){
     document.getElementById('result').innerHTML = "Enter valid numbers";
   }
