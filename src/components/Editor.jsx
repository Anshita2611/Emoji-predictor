import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { getSuggestedEmojis } from "../data/EmojiData";
import EmojiSuggestions from "./EmojiSuggestions";

const Editor = () => {
  const [suggestedEmojis, setSuggestedEmojis] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>Type something like "I am so happy" or "This is so frustrating" to see emoji suggestions!</p>`,
    onUpdate: ({ editor }) => {
      const text = editor.getText().toLowerCase();
      const emojis = getSuggestedEmojis(text);

      if (emojis.length > 0) {
        setSuggestedEmojis(emojis);
        setShowSuggestions(true);
      } else {
        setShowSuggestions(false);
      }
    },
  });

  return (
    <div className="editor-container">
      <EditorContent editor={editor} />
      {showSuggestions && (
        <EmojiSuggestions emojis={suggestedEmojis} onSelect={() => setShowSuggestions(false)} />
      )}
    </div>
  );
};

export default Editor;
