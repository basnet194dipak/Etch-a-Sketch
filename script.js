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

            // add hovering effects
            column.addEventListener("mouseover", () => {
                column.setAttribute("style", "background-color: #0da748;")
            })

            // column.addEventListener("mouseout", () => {
            //     column.setAttribute("style", "background-color: #0805bd;")
            // })

            row.appendChild(column)
        }
        board.appendChild(row)
    }

}

let defaults = document.querySelector("#default")
defaults.addEventListener("click", () => {
    n = 16
    build_board(n)
})

let custom_grid = document.querySelector("#customize_grid")
custom_grid.addEventListener("click", () => {
    let grid_num = prompt("Please Enter the grid size")
    grid_num = Number(grid_num)
    n = grid_num
    if (grid_num < 0 || grid_num > 100) {
        grid_num = 16
    }
    build_board(n)
})


let reset = document.querySelector("#reset")
reset.addEventListener("click", () => {
    build_board(n)
})