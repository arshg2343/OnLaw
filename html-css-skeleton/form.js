let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click",()=>{
    console.log('you are trying to change mode')
    if(currMode === "light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const data = { name, email, message };

    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    fetch("http://127.0.0.1:8000/submit/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken, 
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        alert("Form submitted successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred.");
    });
});
