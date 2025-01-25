export const emojiMapping = {
    happy: ["😊", "🎉", "😄"],
    sad: ["😢", "☹️", "😭"],
    angry: ["😡", "😤", "🤬"],
    love: ["❤️", "😍", "😘"],
    surprised: ["😲", "😮", "😱"],
    nature:["🌲", "🌿", "🌹"],
    animals:["🐶", "🐱", "🐭"],
    food:["🍔", "🍕", "🍟"],
    activity:["⚽", "🏀", "🏈"],
    travel:["🚗", "✈", "🚂"],
    cakes:["🎂", "🍰", "🧁 "],
    scenery:["🌄", "🌅", "🌇"],
    party:["🎈", "🎊", "🎉"],
    birds:["🦚","🦜","🦢"],
    fish:["🐟","🐬","🐳"],

  };
  
  export const getSuggestedEmojis = (text) => {
    const lowerText = text.toLowerCase();
  
    if (lowerText.includes("happy")) {
      return emojiMapping.happy;
    } else if (lowerText.includes("sad")) {
      return emojiMapping.sad;
    } else if (lowerText.includes("angry") || lowerText.includes("frustrating")) {
      return emojiMapping.angry;
    } else if (lowerText.includes("love")) {
      return emojiMapping.love;
    } else if (lowerText.includes("surprised")) {
      return emojiMapping.surprised;
    } else if (lowerText.includes("nature")) {
        return emojiMapping.nature;
    } else if (lowerText.includes("animals")) {
        return emojiMapping.animals;
    } else if (lowerText.includes("food")) {
        return emojiMapping.food;
    } else if (lowerText.includes("activity")) {
        return emojiMapping.activity;
    } else if (lowerText.includes("travel")) {
        return emojiMapping.travel;
    } else if (lowerText.includes("cakes")) {  
        return emojiMapping.cakes;
    } else if (lowerText.includes("scenery")) {
        return emojiMapping.scenery;
    } else if (lowerText.includes("party")) {
        return emojiMapping.party;
    } else if (lowerText.includes("birds")) {
        return emojiMapping.birds;
    } else if (lowerText.includes("fish")) {
        return emojiMapping.fish;
    }
    return [];
  };
  