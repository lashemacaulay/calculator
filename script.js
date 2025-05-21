const add = function (array) {
    return array.reduce((total, current) => total + current, 0);
  };
  
const subtract = function (array) {
    return array.reduce((total, current) => current - total, 0);
};

const multiply = function (array) {
    return array.reduce((product, current) => product * current)
};

const divide = function (array) {
    return array.reduce((product, current) => product / current)
};


function operate(num1, num2, operator) {
    let arr = [num1, num2];
     return operator(arr);
}

console.log(operate(1,2,add));