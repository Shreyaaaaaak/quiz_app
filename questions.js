const QUESTIONS = {

  // ══════════════════════════════
  //  📺 SITCOMS
  // ══════════════════════════════
  sitcoms: [
    {
      question: "What is the name of the coffee shop in Friends?",
      options: ["Central Perk", "Monk's Café", "The Brew", "Java Joe's"],
      answer: 0,
      category: "sitcoms"
    },
    {
      question: "Which office does 'The Office' (US) take place in?",
      options: ["Initech", "Dunder Mifflin", "Vandelay Industries", "Prestige Worldwide"],
      answer: 1,
      category: "sitcoms"
    },
    {
      question: "What is Sheldon Cooper's catchphrase in The Big Bang Theory?",
      options: ["How you doin'?", "Bazinga!", "That's what she said", "Legend-wait for it-dary!"],
      answer: 1,
      category: "sitcoms"
    },
    {
      question: "In Brooklyn Nine-Nine, what is Jake Peralta's favourite movie?",
      options: ["Die Hard", "Speed", "Lethal Weapon", "Point Break"],
      answer: 0,
      category: "sitcoms"
    },
    {
      question: "What is the name of Barney Stinson's book of strategies in HIMYM?",
      options: ["The Man Code", "The Bro Bible", "The Playbook", "The Barnacle"],
      answer: 2,
      category: "sitcoms"
    },
    {
      question: "In Seinfeld, what is George Costanza's fake job title?",
      options: ["Architect", "Marine Biologist", "Both depending on the episode", "Travel Writer"],
      answer: 2,
      category: "sitcoms"
    },
    {
      question: "Which character on Parks & Recreation loves waffles and hates government?",
      options: ["Ben Wyatt", "Ron Swanson", "Tom Haverford", "Andy Dwyer"],
      answer: 1,
      category: "sitcoms"
    },
    {
      question: "What is the name of Ross's pet monkey in Friends?",
      options: ["Bubbles", "Marcel", "Charlie", "Bananas"],
      answer: 1,
      category: "sitcoms"
    },
    {
      question: "In The Office, who declares 'I am the fastest man alive' after winning a 5K?",
      options: ["Michael Scott", "Dwight Schrute", "Kevin Malone", "Andy Bernard"],
      answer: 1,
      category: "sitcoms"
    },
    {
      question: "What city does New Girl take place in?",
      options: ["New York", "Chicago", "Los Angeles", "San Francisco"],
      answer: 2,
      category: "sitcoms"
    }
  ],

  // ══════════════════════════════
  //  🎬 MOVIES
  // ══════════════════════════════
  movies: [
    {
      question: "What is the name of Tony Stark's AI assistant in Iron Man?",
      options: ["JARVIS", "FRIDAY", "VISION", "EDITH"],
      answer: 0,
      category: "movies"
    },
    {
      question: "In Harry Potter, what position does Harry play in Quidditch?",
      options: ["Beater", "Chaser", "Seeker", "Keeper"],
      answer: 2,
      category: "movies"
    },
    {
      question: "Which Disney movie features the song 'Let It Go'?",
      options: ["Tangled", "Brave", "Frozen", "Moana"],
      answer: 2,
      category: "movies"
    },
    {
      question: "In The Dark Knight, what does the Joker say he is?",
      options: ["A criminal", "A ghost", "A dog chasing cars", "A man with a plan"],
      answer: 2,
      category: "movies"
    },
    {
      question: "What is the highest-grossing movie of all time (as of 2024)?",
      options: ["Titanic", "Avengers: Endgame", "Avatar", "Top Gun: Maverick"],
      answer: 2,
      category: "movies"
    },
    {
      question: "In Inception, what is Cobb's totem?",
      options: ["A coin", "A chess piece", "A spinning top", "A watch"],
      answer: 2,
      category: "movies"
    },
    {
      question: "Which actor played Jack in Titanic?",
      options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Hanks", "Matt Damon"],
      answer: 1,
      category: "movies"
    },
    {
      question: "In The Lion King, what is Simba's father's name?",
      options: ["Scar", "Rafiki", "Mufasa", "Zazu"],
      answer: 2,
      category: "movies"
    },
    {
      question: "What Marvel movie features the Infinity Gauntlet being completed?",
      options: ["Age of Ultron", "Civil War", "Infinity War", "Endgame"],
      answer: 2,
      category: "movies"
    },
    {
      question: "In which film does the line 'I'll be back' first appear?",
      options: ["Predator", "Total Recall", "The Terminator", "RoboCop"],
      answer: 2,
      category: "movies"
    }
  ],

  // ══════════════════════════════
  //  🎵 MUSIC
  // ══════════════════════════════
  music: [
    {
      question: "Which artist released the album '25' featuring the hit 'Hello'?",
      options: ["Beyoncé", "Adele", "Rihanna", "Taylor Swift"],
      answer: 1,
      category: "music"
    },
    {
      question: "What is the best-selling album of all time?",
      options: ["Back in Black", "Thriller", "The Dark Side of the Moon", "Hotel California"],
      answer: 1,
      category: "music"
    },
    {
      question: "Which band sang 'Bohemian Rhapsody'?",
      options: ["The Beatles", "Led Zeppelin", "Queen", "Rolling Stones"],
      answer: 2,
      category: "music"
    },
    {
      question: "Taylor Swift's 'Shake It Off' is from which album?",
      options: ["Red", "1989", "Folklore", "Fearless"],
      answer: 1,
      category: "music"
    },
    {
      question: "Which rapper is known as 'The God MC'?",
      options: ["Jay-Z", "Nas", "Rakim", "Biggie"],
      answer: 2,
      category: "music"
    },
    {
      question: "Which song starts with 'Is this the real life? Is this just fantasy?'",
      options: ["Stairway to Heaven", "Hotel California", "Bohemian Rhapsody", "Imagine"],
      answer: 2,
      category: "music"
    },
    {
      question: "BTS is a K-pop group from which country?",
      options: ["Japan", "China", "South Korea", "Thailand"],
      answer: 2,
      category: "music"
    },
    {
      question: "Which artist is known as the 'Queen of Pop'?",
      options: ["Mariah Carey", "Madonna", "Whitney Houston", "Beyoncé"],
      answer: 1,
      category: "music"
    },
    {
      question: "What instrument does Ed Sheeran primarily play?",
      options: ["Piano", "Drums", "Guitar", "Violin"],
      answer: 2,
      category: "music"
    },
    {
      question: "Which song has the lyric 'I kissed a girl and I liked it'?",
      options: ["Lady Gaga - Poker Face", "Katy Perry - I Kissed A Girl", "Ke$ha - Tik Tok", "Rihanna - Umbrella"],
      answer: 1,
      category: "music"
    }
  ],

  // ══════════════════════════════
  //  🎮 GAMING
  // ══════════════════════════════
  gaming: [
    {
      question: "What is the best-selling video game of all time?",
      options: ["Tetris", "GTA V", "Minecraft", "Wii Sports"],
      answer: 2,
      category: "gaming"
    },
    {
      question: "In which game do you play as Master Chief?",
      options: ["Call of Duty", "Halo", "Destiny", "Gears of War"],
      answer: 1,
      category: "gaming"
    },
    {
      question: "What is the name of Link's enemy in The Legend of Zelda?",
      options: ["Bowser", "Ganon", "Mewtwo", "Ridley"],
      answer: 1,
      category: "gaming"
    },
    {
      question: "Which game features a Battle Royale on an island with 100 players?",
      options: ["PUBG", "Apex Legends", "Fortnite", "Warzone"],
      answer: 2,
      category: "gaming"
    },
    {
      question: "What is the currency used in The Witcher 3?",
      options: ["Gold", "Orens/Crowns", "Septims", "Rupees"],
      answer: 1,
      category: "gaming"
    },
    {
      question: "Which studio developed the game 'God of War'?",
      options: ["Naughty Dog", "Insomniac", "Santa Monica Studio", "Guerrilla Games"],
      answer: 2,
      category: "gaming"
    },
    {
      question: "What is the name of the ghost companion in Destiny?",
      options: ["Cortana", "Ghost", "ARIA", "EDI"],
      answer: 1,
      category: "gaming"
    },
    {
      question: "In Among Us, what are the players trying to find?",
      options: ["The hacker", "The imposter", "The spy", "The traitor"],
      answer: 1,
      category: "gaming"
    },
    {
      question: "Which game features the open world of 'Night City'?",
      options: ["GTA V", "Watch Dogs", "Cyberpunk 2077", "Deus Ex"],
      answer: 2,
      category: "gaming"
    },
    {
      question: "What is the name of the main character in Red Dead Redemption 2?",
      options: ["John Marston", "Dutch van der Linde", "Arthur Morgan", "Micah Bell"],
      answer: 2,
      category: "gaming"
    }
  ],

  // ══════════════════════════════
  //  🍿 NETFLIX & OTT
  // ══════════════════════════════
  ott: [
    {
      question: "In Stranger Things, what is the name of the alternate dimension?",
      options: ["The Shadow Realm", "The Upside Down", "The Dark Zone", "The Void"],
      answer: 1,
      category: "ott"
    },
    {
      question: "In Breaking Bad, what is Walter White's street name?",
      options: ["The Cook", "Heisenberg", "White Shadow", "Mr. White"],
      answer: 1,
      category: "ott"
    },
    {
      question: "Money Heist is originally in which language?",
      options: ["Portuguese", "Italian", "Spanish", "French"],
      answer: 2,
      category: "ott"
    },
    {
      question: "In Squid Game, what shape is NOT on the guards' masks?",
      options: ["Circle", "Triangle", "Square", "Star"],
      answer: 3,
      category: "ott"
    },
    {
      question: "Which streaming platform produced 'The Crown'?",
      options: ["HBO", "Amazon Prime", "Netflix", "Disney+"],
      answer: 2,
      category: "ott"
    },
    {
      question: "In Game of Thrones, what is the motto of House Stark?",
      options: ["Fire and Blood", "Hear Me Roar", "Winter is Coming", "We Do Not Sow"],
      answer: 2,
      category: "ott"
    },
    {
      question: "In The Witcher on Netflix, who plays Geralt of Rivia?",
      options: ["Chris Hemsworth", "Henry Cavill", "Kit Harington", "Richard Madden"],
      answer: 1,
      category: "ott"
    },
    {
      question: "What is the name of the coffee shop in 'Emily in Paris'?",
      options: ["Café de Flore", "Gabriel's Restaurant", "Le Grand Véfour", "Café Sauvage"],
      answer: 1,
      category: "ott"
    },
    {
      question: "In Peaky Blinders, what city is the gang based in?",
      options: ["London", "Manchester", "Birmingham", "Liverpool"],
      answer: 2,
      category: "ott"
    },
    {
      question: "Which show features the fictional country 'Gilead'?",
      options: ["Westworld", "The Handmaid's Tale", "Black Mirror", "Dark"],
      answer: 1,
      category: "ott"
    }
  ],

  // ══════════════════════════════
  //  🌍 POP CULTURE
  // ══════════════════════════════
  popculture: [
    {
      question: "Which celebrity couple was known as 'Brangelina'?",
      options: ["Brad Pitt & Jennifer Aniston", "Brad Pitt & Angelina Jolie", "Ben Affleck & Jennifer Lopez", "Justin Bieber & Selena Gomez"],
      answer: 1,
      category: "popculture"
    },
    {
      question: "What year did the Ice Bucket Challenge go viral?",
      options: ["2012", "2013", "2014", "2015"],
      answer: 2,
      category: "popculture"
    },
    {
      question: "Which social media app popularised the Stories format first?",
      options: ["Instagram", "Facebook", "Snapchat", "TikTok"],
      answer: 2,
      category: "popculture"
    },
    {
      question: "What does 'GOAT' stand for in pop culture?",
      options: ["Going Out All Time", "Greatest Of All Time", "Getting Over All Things", "Grading Out At Top"],
      answer: 1,
      category: "popculture"
    },
    {
      question: "Which meme features a dog sitting in a burning room saying 'This is fine'?",
      options: ["Distracted Boyfriend", "This Is Fine Dog", "Doge", "Hide the Pain Harold"],
      answer: 1,
      category: "popculture"
    },
    {
      question: "What is the name of Elon Musk's space company?",
      options: ["Blue Origin", "Virgin Galactic", "SpaceX", "Rocket Lab"],
      answer: 2,
      category: "popculture"
    },
    {
      question: "Which artist had a 'wardrobe malfunction' at the 2004 Super Bowl halftime show?",
      options: ["Beyoncé", "Janet Jackson", "Britney Spears", "Madonna"],
      answer: 1,
      category: "popculture"
    },
    {
      question: "What colour is the 'Dress' from the viral 2015 internet debate?",
      options: ["Red and Gold", "Blue and Black OR White and Gold", "Pink and Silver", "Green and Brown"],
      answer: 1,
      category: "popculture"
    },
    {
      question: "Which platform has the most monthly active users as of 2024?",
      options: ["Instagram", "TikTok", "Facebook", "YouTube"],
      answer: 2,
      category: "popculture"
    },
    {
      question: "What was the first tweet ever sent by Jack Dorsey?",
      options: ["Hello world!", "just setting up my twttr", "Twitter is live!", "Let's do this"],
      answer: 1,
      category: "popculture"
    }
  ]

};

// ── Helper: get questions by selected categories ──
function getQuestions(selectedCategories, count = 10) {
  let pool = [];

  selectedCategories.forEach(cat => {
    if (QUESTIONS[cat]) pool = pool.concat(QUESTIONS[cat]);
  });

  // Shuffle the pool
  pool = pool.sort(() => Math.random() - 0.5);

  // Return requested count
  return pool.slice(0, count);
}

// ── Helper: get all questions (for flashcards) ──
function getAllQuestions(category = 'all') {
  if (category === 'all') {
    let all = [];
    Object.values(QUESTIONS).forEach(arr => all = all.concat(arr));
    return all.sort(() => Math.random() - 0.5);
  }
  return QUESTIONS[category] ? [...QUESTIONS[category]] : [];
}