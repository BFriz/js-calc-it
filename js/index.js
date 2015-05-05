var number = document.getElementsByClassName('number');
var firstNum ='';
var firstOp ='';
var secondNum = '';
var operator = document.getElementsByClassName('operator');
var equal = document.getElementsByClassName('eq');
//find and store the first number input from the user
for (var i = 0; i< number.length; i++){
  number[i].addEventListener("click", function(e){
   if (firstNum === ''){
    firstNum = parseInt(this.value);
  }else{
    secondNum = parseInt(this.value);
  }
  });
}
//find and store the operator input from the user
for (var i = 0; i< operator.length; i++){
  operator[i].addEventListener("click", function(e){
   firstOp = this.value;
  });
}

  // switch(answer){
  //   case "-":
  //   var ans = firstNum - secondNum;
  //   break;
  //   case "+":
  //   var ans = firstNum + secondNum;
  //   break;
  //   case "*":
  //   var ans = firstNum * secondNum;;
  //   break;
  //   case "/":
  //   var ans = firstNum / secondNum;;
  //   break;