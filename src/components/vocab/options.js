import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./options.scss";

function ChooseOption({ options, onOptionChange }) {
  const [selectedOption, setSelectedOption] = useState(options[0] || {});
  const [selectedWord, setSelectedWord] = useState(selectedOption.words[0] || {});

  const handleSelect = (option) => {
    const selected = options.find((o) => o.name === option.value) || {};
    setSelectedOption(selected);
    onOptionChange(selected);
    setSelectedWord(selected.words[0] || {});
  };

  const handleWordSelect = (word) => {
    setSelectedWord(word);
  };

  const dropdownOptions = options.map((option) => ({
    value: option.name,
    label: option.name
  }));

  const wordDropdownOptions = selectedOption.words.map((word) => ({
    value: `${word.word} - ${word.translate}`,
    label: `${word.word} - ${word.translate}`
  }));

  return (
    <div className="dropdowns">
      <Dropdown
        options={wordDropdownOptions}
        onChange={(selected) => handleWordSelect(selected)}
        value={`${selectedWord.word} - ${selectedWord.translate}`}
        placeholder="Zobacz"
      />
      <Dropdown
        options={dropdownOptions}
        onChange={handleSelect}
        value={selectedOption.name}
        placeholder="Słownictwo"
      />
    </div>
  );
}

export default ChooseOption;








/*import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./options.scss";

function ChooseOption({ options, onOptionChange }) {
  const [selectedOption, setSelectedOption] = useState(options[0] || {});

  const handleSelect = (option) => {
    const selected = options.find((o) => o.name === option.value) || {};
    setSelectedOption(selected);
    onOptionChange(selected);
  };



  const dropdownOptions = options.map((option) => ({
    value: option.name,
    label: option.name
  }));

  return (
    <Dropdown
      options={dropdownOptions}
      onChange={handleSelect}
      value={selectedOption.name}
      placeholder="Słownictwo"
    />
  );
}

export default ChooseOption;*/