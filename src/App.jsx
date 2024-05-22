import { useState } from "react";
import Grid from "./components/Grid";

const App = () => {
  const [outputString, setOutputString] = useState("");

  const handleClick = (letter) => {
    setOutputString((prevOutputString) => {
      let updatedString = prevOutputString + letter;
      let result = "";
      let i = 0;

      while (i < updatedString.length) {
        let char = updatedString[i];
        let count = 1;

        // Count consecutive characters
        while (i + 1 < updatedString.length && updatedString[i + 1] === char) {
          count++;
          i++;
        }

        // If there are three or more consecutive characters, replace with "_"
        if (count >= 3) {
          result += "_";
        } else {
          result += char.repeat(count);
        }

        i++;
      }

      return result;
    });
  };

  return (
    <div className="app">
      <h1>Alphabet Tiles</h1>
      <Grid onClick={handleClick} />
      <div id="outputString">{outputString}</div>
    </div>
  );
};

export default App;
