import { useEffect, useState } from "react";

const WINNING_WORDS = [
  "teach",
  "glass",
  "roast",
  "crate",
  "crane",
  "earth",
  "ebony",
  "entry",
];

const getRandomItem = (array) => {
  const randomItem = array[Math.floor(Math.random() * array.length)];
  return randomItem;
};

const Wordle = () => {
  const [word, setWord] = useState(() => getRandomItem(WINNING_WORDS));
  const [guessesLeft, setguessesLeft] = useState(6);
  const [inputGuess, setinputGuess] = useState("");
  const [enteredGuesses, setenteredGuesses] = useState([]);

  const handleInputChange = (event) => {
    setinputGuess(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (guessesLeft > 0) {
        if (event.target.value === word) {
          setenteredGuesses(enteredGuesses.concat(event.target.value));
          alert(`YOU WON!`);
        } else {
          setenteredGuesses(enteredGuesses.concat(event.target.value));
          setguessesLeft(guessesLeft - 1);
        }
      } else {
        alert(`No more guesses. The word was ${word}!!`);
      }

      console.log(enteredGuesses);
    }
  };

  return (
    <div className="wordle">
      <h1>wordle</h1>
      <div>
        You have <span className="guessesLeft">{guessesLeft}</span> guesses
        remaining.
      </div>
      <input
        maxLength={5}
        type="text"
        value={inputGuess}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      ></input>
      {enteredGuesses.map((guess) => {
        return (
          <div className="word">
            {guess.split("").map((letter, index) => {
              return (
                <div
                  className="letter"
                  style={{
                    backgroundColor:
                      word.charAt(index) === letter
                        ? "lightgreen"
                        : word.includes(letter)
                        ? "yellow"
                        : "gray",
                  }}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Wordle;
