import { useState } from "react";
import { v4 as uuid } from "uuid";

function randomEmoji() {
  const choices = ["🤩", "🤔", "😉", "🤯", "😩", "😭", "🤑", "😡"];
  return choices[Math.floor(Math.random() * choices.length)];
}

export default function EmojiClicker() {
  const [emojis, setEmoji] = useState([
    { id: uuid(), emoji: randomEmoji() },
    { id: uuid(), emoji: randomEmoji() },
  ]);
  const addEmoji = () => {
    setEmoji((prevEmojis) => {
      return [...prevEmojis, { id: uuid(), emoji: randomEmoji() }];
    });
  };
  const removeEmoji = (id) => {
    // Delete emoji with a specific id
    setEmoji((prevEmojis) => {
      return prevEmojis.filter((e) => e.id !== id);
    });
  };

  const makeAllEmojisHeart = () => {
    setEmoji((prevEmojis) => {
      return prevEmojis.map((e) => {
        return { ...e, emoji: "❤️" };
      });
    });
  };
  return (
    <div>
      {emojis.map((e) => (
        <span
          onClick={() => removeEmoji(e.id)}
          key={e.id}
          style={{ fontSize: "4rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={makeAllEmojisHeart}>Make them all hearts</button>
    </div>
  );
}
