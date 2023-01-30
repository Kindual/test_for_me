export let arrayCommand = [
    { firstCommand: 'barselona', firstCommandGoal: '0', secondCommand: 'Lyoha', secondCommandGoal: '11' },
    { firstCommand: 'mazepa', firstCommandGoal: '1488', secondCommand: 'chervyak', secondCommandGoal: '1' },
    { firstCommand: 'threeTwoTwo', firstCommandGoal: '1', secondCommand: 'cyborg', secondCommandGoal: '2' },
    { firstCommand: 'barselona', firstCommandGoal: '18', secondCommand: 'mazepa', secondCommandGoal: '4' },
    { firstCommand: 'musor', firstCommandGoal: '3', secondCommand: 'trash', secondCommandGoal: '22' }
];

if (localStorage.getItem('games')) {
    arrayCommand = JSON.parse(localStorage.getItem('games'));
}

export function printGames(games, listEl) {
    listEl.innerHTML = games.map((game, index) => `
    <li class="none">
        <p> ${game.firstCommand} ${game.firstCommandGoal}:${game.secondCommandGoal} ${game.secondCommand} </p>
        <button type="button" name="deleteMatch" data-index="${index}">Delete</button>
        <button type="button" name="edit" data-index="${index}">Edit</button>
        <form action="" data-form class="form-element-edit">
            <input type="text" name="firstCommand" value="${game.firstCommand}">
            <input type="number" name="firstCommandGoal" value="${game.firstCommandGoal}" >
            <input type="text" name="secondCommand" value="${game.secondCommand}">
            <input type="number" name="secondCommandGoal" value="${game.secondCommandGoal}">
            <button type="submit">Submit</button>
        </form>
        </li>`).join('');

    const btnsDelete = document.querySelectorAll('[name="deleteMatch"]');
    const btnsEdit = document.querySelectorAll('[name="edit"]');
    const btnsSubmitInEdit = document.querySelectorAll('.form-element-edit')

    btnsDelete.forEach(btn => {
        btn.addEventListener('click', deleteGame)
    });

    btnsEdit.forEach(btn => {
        btn.addEventListener('click', editGame)
    });

    btnsSubmitInEdit.forEach(btn => {
        btn.addEventListener('submit', submitEdit)
    })

}

function deleteGame(event) {
    const btn = event.target.dataset.index;
    const listEl = document.querySelector('.list-games');

    arrayCommand.splice(btn, 1);
    printGames(arrayCommand, listEl);
    localStorage.setItem('games', JSON.stringify(arrayCommand));
}

function editGame(event) {
    event.target.parentNode.classList.toggle('none');
}

function submitEdit(event) {
    event.preventDefault();

    const index = event.target.parentNode.querySelector('[data-index]').dataset.index;

    const {
        elements: { firstCommand, firstCommandGoal, secondCommand, secondCommandGoal }
    } = event.target;

    arrayCommand[index] = {
        firstCommand: firstCommand.value,
        firstCommandGoal: firstCommandGoal.value,
        secondCommand: secondCommand.value,
        secondCommandGoal: secondCommandGoal.value,
    };
    
    localStorage.setItem('games', JSON.stringify(arrayCommand));
    const listEl = document.querySelector('.list-games');
    printGames(arrayCommand, listEl);
}