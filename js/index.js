var number = document.getElementsByClassName('number');
var firstNum ='';
var firstOp ='';
var secondNum = '';
var operator = document.getElementsByClassName('operator');
var equal = document.getElementsByClassName('eq');
var ans = '';
var display = document.getElementsByClassName('display')
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

equal[0].addEventListener("click", function(e){
   switch(firstOp){
    case "-":
    ans = firstNum - secondNum;
    break;
    case "+":
    ans = firstNum + secondNum;
    break;
    case "*":
    ans = firstNum * secondNum;
    break;
    case "/":
    ans = firstNum / secondNum;
    break;
   }
   });

display[0].addEventListener('submit', function(event) {
 alert(this.ans);
});
 