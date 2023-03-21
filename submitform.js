let name = document.getElementById("name");
let email = document.getElementById("email");
let comment = document.getElementById("comment");

function submit(){
if (name.value == "" || email.value == "") {
    alert("Ensure you input a value in both fields!");
} else {
    // perform operation with form input
    alert("Received!! Thank you for your time.");
    name.value = "";
    email.value = "";
    comment.value = "";
  }
};

window.addEventListener("submit",submit);