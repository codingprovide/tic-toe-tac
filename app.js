function checkWin() {
  const cellElements = document.querySelectorAll(".cell");

  // Define winning combinations
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  // Check each winning combination
  for (const combination of winCombinations) {
    const [a, b, c] = combination;
    const cellA = cellElements[a].querySelector("span");
    const cellB = cellElements[b].querySelector("span");
    const cellC = cellElements[c].querySelector("span");

    // Check if all cells in the combination have the same player class
    if (
      cellA &&
      cellB &&
      cellC &&
      cellA.classList.contains(player) &&
      cellB.classList.contains(player) &&
      cellC.classList.contains(player)
    ) {
      // Use setTimeout to delay the alert
      setTimeout(() => {
        alert(`Player ${player} wins!`);
      }, 100);
      setTimeout(function () {
        window.location.reload();
      }, 100); // Adjust the delay (in milliseconds) as needed

      return;
    }
  }

  console.log("No winner yet.");
}

// Assume player is "circle" initially
let player = "circle";

function handleClick(cell) {
  const selectorSpanElement = cell.querySelector("span");

  if (!selectorSpanElement) {
    const togglePlayer = (player) => (player === "circle" ? "cross" : "circle");

    player = togglePlayer(player);
    console.log(player);

    const createSpanElement = document.createElement("span");
    createSpanElement.classList.add(player);
    cell.appendChild(createSpanElement);

    // Check for a winner after each move
    checkWin();
  } else {
    return;
  }
}
