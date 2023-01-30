import { arrayCommand, printGames } from "./refs";

const formEl = document.querySelector("[data-form]");
const listEl = document.querySelector('.list-games');
const btnToDelete = document.querySelector('[name="findToDelete"]')


printGames(arrayCommand, listEl);

formEl.addEventListener('submit', printForName)
btnToDelete.addEventListener('submit', printForDelete)

function printForName(event) {
    event.preventDefault();

    const filter = event.target.elements.commandName.value;

    const arrayFilteredGames = arrayCommand.filter(game =>
        game.firstCommand.includes(filter) || game.secondCommand.includes(filter));
    
    printGames(arrayFilteredGames, listEl);
}

