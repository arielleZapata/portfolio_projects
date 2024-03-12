console.log("Welcome to your Fortune Teller!")

const intros = [
    "Your fortune today is:",
    "The universe says:",
    "Listen closely:",
    "Prepare yourself for:",
    "Here's what lies ahead for you:",
  ];
  
  const middles = [
    "a wave of unexpected joy.",
    "a journey filled with new opportunities.",
    "a challenge that will lead to growth.",
    "a moment of clarity and understanding.",
    "a surprise that will change your perspective.",
  ];
  
  const ends = [
    "Embrace it with an open heart.",
    "Trust in your intuition.",
    "Stay positive and keep moving forward.",
    "Believe in yourself and your abilities.",
    "Remember, every ending is a new beginning.",
  ];

  console.log(intros[Math.floor(Math.random()*intros.length)] + " " + middles[Math.floor(Math.random()*middles.length)] + " " + ends[Math.floor(Math.random()*ends.length)]);
  


