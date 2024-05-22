// Grid.js
import Tile from "./Tile";

const Grid = ({ onClick }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="grid">
      {alphabet.map((letter) => (
        <Tile key={letter} letter={letter} onClick={onClick} />
      ))}
    </div>
  );
};

export default Grid;
