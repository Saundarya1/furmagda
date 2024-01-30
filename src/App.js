import React, { useState } from "react";
import Vocab from "./components/vocab/vocab";
import ChooseOption from "./components/vocab/options";
import options from "./arrays/options";

function App() {

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <ChooseOption options={options} onOptionChange={handleOptionChange} />
      <Vocab wordsToTranslate={selectedOption.words} />
    </div>
  );
}

export default App;