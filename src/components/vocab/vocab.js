import React, { useState, useEffect } from "react";
import "./vocab.scss";
import UmlautBtns from "../umlautBtns/umlautBtns";


function Vocab({ wordsToTranslate }) {
  const [userAnswer, setUserAnswer] = useState("");
  const [shuffledWords, setShuffledWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    setShuffledWords(shuffleArray(wordsToTranslate));
    setCurrentWordIndex(0);
  }, [wordsToTranslate]);

  useEffect(() => {
    if (
      shuffledWords.length > 0 &&
      userAnswer.toLowerCase() === shuffledWords[currentWordIndex].translate.toLowerCase()
    ) {
      handleNextWord();
    }
  }, [userAnswer, currentWordIndex, shuffledWords]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleAnswerChange = (input) => {
    setUserAnswer(input);
  };

  const handleButtonClick = (letter) => {
    setUserAnswer((prevUserAnswer) => prevUserAnswer + letter);
  };

  const handleNextWord = () => {
    setUserAnswer("");
    setCurrentWordIndex((prevIndex) => {
      if (prevIndex === shuffledWords.length - 1) {
        setShuffledWords(shuffleArray(wordsToTranslate));
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <div className="vocab-inputs">
      <div className="question-input">
        <input disabled name="question" value={shuffledWords.length > 0 ? shuffledWords[currentWordIndex].word : ""} />
      </div>
      <div className="answer-input">
        <input
          name="answer"
          value={userAnswer}
          onChange={(e) => handleAnswerChange(e.target.value)}
        />
        <UmlautBtns handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default Vocab;