let n = 16

function build_board(n) {
    let board = document.querySelector(".board")
    board.innerHTML = "";
    // create row
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div")
        row.setAttribute("class", "row")
        // create column
        for (let j = 0; j < n; j++) {
            const column = document.createElement("div")
            column.setAttribute("class", "column")
            row.appendChild(column)
        }
        board.appendChild(row)
    }

}
