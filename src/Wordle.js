import { useState } from 'react';

const Wordle = () => {

  const [word, setWord] = useState('birds');
  const [guessesLeft, setguessesLeft] = useState(6);
  const [inputGuess, setinputGuess] = useState('');
  const [enteredGuesses, setenteredGuesses] = useState([]);

  const handleInputChange = event => {
    setinputGuess(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setenteredGuesses(enteredGuesses.concat(event.target.value));
      if (guessesLeft > 0) {
        setguessesLeft(guessesLeft - 1);
      } else {
        alert('You have no guesses left!')
      }

      console.log(enteredGuesses)
    }
  }

  return (
    <div className="wordle">
      <div>You have {guessesLeft} guesses remaining.</div>
      <input maxLength={5} placeholder="Make a guess..." type="text" value={inputGuess} onChange={handleInputChange} onKeyDown={handleKeyDown}></input>
      {enteredGuesses.map((guess) => {
        return (
          <div className="word">
            {guess.split('').map((letter) => {
              return (
                <div className="letter" style={{backgroundColor: word.includes(letter) ? 'cornsilk' : 'pink'}}>{letter}</div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Wordle;