const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === "white") {
            body.style.backgroundColor = "white"
        }
        else if (e.target.id === "red") {
            body.style.backgroundColor = "red"
        }
        else if (e.target.id === "yellow") {
            body.style.backgroundColor = "yellow"
        }
        else if (e.target.id === "black") {
            body.style.backgroundColor = "black"
        }
    })
});


