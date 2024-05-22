# Alphabet Tile Grid React Application

This React application displays a grid of tiles, each representing a letter of the alphabet in uppercase format. It allows users to interact with the tiles by clicking them to build a string of letters, which is displayed and dynamically updated with certain rules for consecutive letters.

## Features

1. **Tile Rendering**: A grid layout displaying tiles for each letter from A to Z.
2. **Click Interaction**: Clicking a tile appends the corresponding letter to the `outputString`.
3. **Consecutive Letter Replacement**: If three or more consecutive letters in the `outputString` are the same, they are replaced with underscores (`_`).

## Example Output

- Initial state: `outputString` is empty.
- After clicking "A", "B", "C", "F", "F", "F", "G": `outputString` displays `ABC_G`.
- After clicking "A" six times followed by "B": `outputString` displays `__B`.

## Installation

To run this application locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/arifjahan88/frontend-task-masterkey
   cd frontend-task-masterkey
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.
