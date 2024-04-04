/*
document.addEventListener("DOMContentLoaded", function() {
  const loginContainer = document.getElementById("loginContainer");
  const signupContainer = document.getElementById("signupContainer");
  const signupLink = document.getElementById("signupLink");
  const loginLink = document.getElementById("loginLink");

  // Show signup form when signup link is clicked
  signupLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    loginContainer.style.display = "none";
    signupContainer.style.display = "block";
  });

  // Show login form when login link is clicked
  loginLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    loginContainer.style.display = "block";
    signupContainer.style.display = "none";
  });

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Here you can add code to authenticate the user with the server
    // For demonstration purposes, let's just log the username and password
    console.log("Username:", username);
    console.log("Password:", password);

    // You can also clear the form fields after login
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  });

  signupForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Here you can add code to send the sign-up data to your server for processing
    // For demonstration purposes, let's just log the new username and password
    console.log("New Username:", newUsername);
    console.log("New Password:", newPassword);

    // You can also clear the form fields after sign-up
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
  });
});
*/

