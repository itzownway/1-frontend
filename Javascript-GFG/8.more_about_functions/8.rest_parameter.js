/**
 * REST Parameters  --> ...rest/ ...args
 */


function calculate(a, b, ...args) {
  console.log(a, b);
  console.log(args);
}

calculate(4,5,6,7,8,9,10,11,12,13);