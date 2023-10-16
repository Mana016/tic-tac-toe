let gameBoardModule = (function() {
    let gameBoard = ["X"];
    return {gameBoard};
})();

let displayController = (function() {
    const makeMove = document.querySelectorAll(".game-board-button");
    
    let index = 0;
    makeMove.forEach(makeMoves => {
        makeMoves.dataset.linkedButton = index;
        makeMoves.addEventListener("click", renderArrayToScreen);

        function renderArrayToScreen() {
            const gridBoxes = document.querySelectorAll(".grid-box");

            let index = 0;
            gridBoxes.forEach(gridBox => {
                gridBox.dataset.linkedButton = index;

                if (gridBox.getAttribute("data-linked-button") == makeMoves.getAttribute("data-linked-button")) {
                    gridBox.textContent = gameBoardModule.gameBoard(gameBoardModule.gameBoard.length - 1);
                    console.log("show me my button value...", makeMoves.dataset.linkedButton);
                    console.log("show the grid box button value...", gridBox.dataset.linkedButton);
                }
            index++;    
            })
        }
    index++;    
    })

    let testF = () => {console.log("testing function call from modul object...")};
    return {testF};
})();

let createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = () => {playerName;
    console.log("this is the name of player " + playerNumber + ". . . ." + playerName); }
    return {getPlayerName, playerName, playerNumber, assignedXO};
};

let renderArrayToScreen = (function() {
    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes[0].textContent = gameBoardModule.gameBoard;
    console.log("show me the array...", gameBoardModule.gameBoard)
    console.log("show me the node list...", gridBoxes);
    return {};
})();

let player1 = createPlayer("player1", 1, "X");
let player2 = createPlayer("player2", 2, "O");
renderArrayToScreen;