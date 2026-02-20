var pass;
var mail;
function check() {
  pass = document.getElementById("login").value;
  mail = document.getElementById("email").value;
  if (pass === "te2wt17tw7YJ8" && mail === "keyboardspam@icloud.com") {
    alert("secret. you've logged in. this has no purpose currently. it was gonna do something but i decided against it.");
  } else {
    alert("nothing to see here...");
  }
}
