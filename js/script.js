var operation
while(true){
  operation = prompt("Какую операцию вы хотите сделать?");
  if(operation == '+' || operation == '-' || operation == '*' || operation == '/') break
}
var operand
while(true){
  operand = Number (prompt("Сколько операндов хотите использовать?"));
  if(!isNaN(operand)) break
}
var result;
for( var i = 1; i <= operand;i++){
  var operandNumber
  while(true){
    operandNumber = Number (prompt(`Введите ${i}-е число?`));
    if(!isNaN(operandNumber)) break
  }
  if (i == 1){
    result = operandNumber
    continue
  }
  switch(operation) {
    case '+' : {
      result = result + operandNumber
      break;
    }
    case '-' : {
      result = result - operandNumber
      break;
    }
    case '*' : {
      result = result * operandNumber
      break;
    }
    case '/' : {
      result = result / operandNumber
      break;
    }
    
  }
}
console.log (result);



  






  


