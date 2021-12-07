import "./styles.css";
import React, { useState } from "react";
// this is our data base
// impt things - click handler for everything , state adn how to use them
const emojidictionary = {
  "😀": "Happy",
  "😢": "Sad",
  "💖": "Heart",
  "🤑": "Money",
  "🤩": "Star struck",
  "🤔": "Thinking",
  "🥳": "Party"
};
// we too an array out of dictionary
var emojisweknow = Object.keys(emojidictionary);

export default function App() {
  // we have 2states meaning (do we know meaning) , set meaning(sets the meaning)
  const [meaning, setMeaning] = useState("");

  // 2 handlers
  // 1 checks input we give in input box
  function emojiinputhandler(event) {
    // processing
    // takes input from target value then sets the meaning
    var userinput = event.target.value;

    var meaning = emojidictionary[userinput];

    if (meaning === undefined) {
      meaning = "we dont have it in our data base ";
    }
    setMeaning(meaning); // react call to show output
  }

  // 2 handler - when we click on emoji it gives us output of emoji
  function emojiclickhandler(emoji) {
    // processing
    var meaning = emojidictionary[emoji];
    setMeaning(meaning); // react call to show output
  }
  // view
  return (
    <div className="App">
      <h1>Emoji predictor</h1>
      {/* input element and handler  */}
      <input onChange={emojiinputhandler} />
      {/* meaning variabel - depends on state and shows us output eg happy  */}
      <h2> {meaning} </h2>{" "}
      {/* this is our actual meaning shown on screen , when set meaning this gets updated by react using use state */}
      <h3>emojis we know</h3>
      {/* map - list ,every item has onclick handler */}
      {emojisweknow.map(function (emoji) {
        return (
          <span
            // when u click on something it goes to functionof click handler
            onClick={() => emojiclickhandler(emoji)}
            style={{ padding: "0.5rem", fontSize: "3rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
