const h1 = document.querySelector("h1");
const chooseInput = document.querySelector("#chooseInput");
const tennisDeTable = document.querySelector("#tennisDeTable");
const badminton = document.querySelector("#badminton");
const tennis = document.querySelector("#tennis");
const setNumber = document.querySelector("#setNumber");
const playerOne = document.querySelector("#playerOne");
const playerTwo = document.querySelector("#playerTwo");
const reset = document.querySelector(".button.is-danger");
let number = 0;

function handleReset() {
    scorePlayerOne.style.color = "black";
    scorePlayerTwo.style.color = "black";
    currentScoreP1 = 0;
    currentScoreP2 = 0;
    scorePlayerOne.innerText = currentScoreP1;
    scorePlayerTwo.innerText = currentScoreP2;

    playerOne.disabled = false;
    playerTwo.disabled = false;
}
chooseInput.addEventListener("input", () => {
    h1.innerText = `Score keeper for ${chooseInput.value}`;
    tennisDeTable.style.display = "none";
    tennis.style.display = "none";
    badminton.style.display = "none";
    if (chooseInput.value === "Tennis de table") {
        tennisDeTable.style.display = "block";
        number = 11;
        setNumber.innerText = `Playing to ${number}`;
    } else if (chooseInput.value === "Badminton") {
        badminton.style.display = "block";
        number = 7;
        setNumber.innerText = `Playing to ${number}`;
    } else if (chooseInput.value === "Tennis") {
        tennis.style.display = "block";
        number = 5;
        setNumber.innerText = `Playing to ${number}`;
    }
    handleReset();
});

const scorePlayerOne = document.querySelector("#scorePlayerOne");
const scorePlayerTwo = document.querySelector("#scorePlayerTwo");
let currentScoreP1 = 0;
let currentScoreP2 = 0;


playerOne.addEventListener("click", () => {
    currentScoreP1 += 1;
    scorePlayerOne.innerText = currentScoreP1;
    if (currentScoreP1 === number) {
        scorePlayerOne.style.color = "green";
        playerOne.disabled = true;
        playerTwo.disabled = true;
        scorePlayerTwo.style.color = "red";
    }
});

playerTwo.addEventListener("click", () => {
    currentScoreP2 += 1;
    scorePlayerTwo.innerText = currentScoreP2;
    if (currentScoreP2 === number) {
        scorePlayerTwo.style.color = "green";
        playerOne.disabled = true;
        playerTwo.disabled = true;
        scorePlayerOne.style.color = "red";
    }
});

reset.addEventListener("click", handleReset);

