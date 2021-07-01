
form = document.getElementById("my_form");

form.addEventListener("submit", (event)=> {
    re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    email = document.getElementById("text_box").value;
    error = document.getElementById("error");
    event.preventDefault();
    if(!re.test(email)) {
        error.innerHTML = "Oops! That doesn’t look like an email address";
    } else {
        error.innerHTML = "";
    }
})
