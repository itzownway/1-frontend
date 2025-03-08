let a = 1;
function x() {
  console.log(a);
  let b = 3;
  function y() {
    let c = 5;
    console.log(b);
    function z() {
      let d = 7;
      console.log(c);
    }
    z();
  }
  y();
}
x();
