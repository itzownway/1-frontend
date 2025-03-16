// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let holdError = document.getElementById('error');
console.log(holdError)
function error() {
holdError.textContent = "Something went wrong, please try again";
}
