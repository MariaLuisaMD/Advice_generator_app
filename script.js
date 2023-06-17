const dado = document.getElementById("dado");
const NumId = document.getElementById("advice-number");
const Text = document.querySelector(".adv-text");


window.onload = mostraQuote;

dado.addEventListener("click", function(){
    mostraQuote();
})


function mostraQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        NumId.innerText = data.id;
        Text.innerText = data.advice;
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });
}