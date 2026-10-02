# Etch-a-Sketch

A browser-based **Etch-a-Sketch** application built with **HTML, CSS, and JavaScript** as part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.

The project focuses on creating a dynamic drawing grid using JavaScript and practicing DOM manipulation, event listeners, user input, and Flexbox. The grid is generated dynamically based on the selected grid size.

## Live Preview

[View Live Demo](https://basnet194dipak.github.io/Etch-a-Sketch/)

## Features

- Draw on the grid by moving the mouse over cells
- Grid cells change color when hovered over
- Grid cells change to a different color when the mouse leaves
- Customize the grid size from **1 × 1** up to **100 × 100**
- Reset the current board while keeping the same grid size
- Restore the default **16 × 16** grid
- Grid is dynamically generated using JavaScript
- Input validation for custom grid sizes

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Flexbox
- Git & GitHub

## What I Practiced

Through this project, I practiced:

- DOM selection and manipulation
- Creating HTML elements dynamically with JavaScript
- `createElement()`
- `appendChild()`
- `setAttribute()`
- Nested `for` loops
- JavaScript functions
- Variables and scope
- Conditional statements
- Event listeners
- `mouseover` and `mouseout` events
- Handling user input with `prompt()`
- Converting input using `Number()`
- Input validation
- Dynamically rebuilding the DOM
- Using Flexbox for layout
- Working with dynamically generated elements
- Git & GitHub

## How to Run

1. Clone the repository:

    ```bash
    git clone https://github.com/basnet194dipak/Etch-a-Sketch.git

    ```

2. Navigate to the project directory

    ```bash
    cd Etch-a-Sketch
    ```

3. Open `index.html` in your preferred web browser.

No additional dependencies or installation steps are required.

## How to Use

1. Open the application in your browser.
2. The board starts with a default 16 × 16 grid.
3. Move your mouse over the grid cells to interact with them.
4. Grid cells change to green when the mouse moves over them.
5. Grid cells change to blue when the mouse leaves them.
6. Click Customize Grid to choose a custom grid size.
7. Enter a number between 1 and 100 when prompted.
8. The board will be rebuilt using the selected grid size.
9. Click Reset Board to rebuild the current grid.
10. Click Default Grid: 16 × 16 to restore the default grid.
11. If an invalid grid size is entered, the application displays an error message and resets the board to the default 16 × 16 grid.

## Project Structure

```text
odin-etch-a-sketch/
├── README.md
├── index.html
├── script.js
└── style.css
```

## Files

### `index.html`

Contains the structure of the Etch-a-Sketch interface, including the settings section, grid control buttons, and drawing board container.

### `script.js`

Contains the application logic, including dynamic grid generation, grid size customization, reset functionality, default grid functionality, input validation, and mouse interaction with the grid cells.

### `style.css`

Contains the styling for the Etch-a-Sketch interface, including the layout, settings section, buttons, drawing board, rows, and grid cells.

## Credits

- **Project assignment:** [The Odin Project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch)
- **Project curriculum:** Foundations
- **Project concept:** Etch-a-Sketch
