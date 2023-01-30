import { arrayCommand, printGames } from "./refs";

const formEl = document.querySelector("[data-form]");
const listEl = document.querySelector('.list-games');

formEl.addEventListener('submit', submitForm);


printGames(arrayCommand, listEl);

function submitForm(event) {
    event.preventDefault();

    console.dir(event.target.elements);

    const {
        elements: { firstCommand, firstCommandGoal, secondCommand, secondCommandGoal }
    } = event.target;

    arrayCommand.push({
        firstCommand: firstCommand.value,
        firstCommandGoal: firstCommandGoal.value,
        secondCommand: secondCommand.value,
        secondCommandGoal: secondCommandGoal.value,
    })
    printGames(arrayCommand, listEl);
    localStorage.setItem('games', JSON.stringify(arrayCommand));

    event.target.reset();

    console.log(arrayCommand);
}

