var number = document.getElementsByClassName('number');
var firstNum ='';
var firstOp ='';
for (var i = 0; i< number.length; i++){
  number[i].addEventListener("click", function(e){
   firstNum = parseInt(this.value);
  });
}

var operator = document.getElementsByClassName('operator');
for (var i = 0; i< operator.length; i++){
  operator[i].addEventListener("click", function(e){
   firstOp = this.value;
  });
}