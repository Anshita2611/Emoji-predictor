import React from "react";

const EmojiSuggestions = ({ emojis, onSelect }) => {
  return (
    <div className="emoji-suggestions">
      {emojis.map((emoji, index) => (
        <span
          key={index}
          className="emoji-item"
          onClick={() => {
            onSelect(emoji);
          }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default EmojiSuggestions;
