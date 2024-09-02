let paraElement = document.getElementById("timer");
let inputElement = document.getElementById("defuser");

let counter = 10;
let uniqueId = setInterval(function() {
    console.log(counter);
    counter = counter - 1;
    paraElement.textContent = counter;
    if (counter === 0) {
        clearInterval(uniqueId);
        paraElement.textContent = "BOOM!!";
    }
}, 1000);
inputElement.addEventListener("keydown", function(event) {
    let bombDefuserText = inputElement.value;
    if (bombDefuserText === "defuse" && event.key === "Enter" && counter !== 0) {
        paraElement.textContent = "You did It!";
        clearInterval(uniqueId);
    }

})
