document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorElement = document.getElementById("error");
    if (username === "rex" && password === "1234") {
        window.location.href = "main.html";
    } else {
        errorElement.textContent = "Invalid username or password!";
    }
});