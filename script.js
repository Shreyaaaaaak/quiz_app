// ══════════════════════════════════════════════
//  KON BNEGA GOAT? — Complete App Logic
// ══════════════════════════════════════════════

// ── STATE ──
const state = {
  playerName:        '',
  selectedCategories: [],
  questions:         [],
  currentIndex:      0,
  score:             0,
  correctCount:      0,
  timer:             null,
  timeLeft:          15,
  totalTime:         15,
  usedLifeline5050:  false,
  usedLifelineSkip:  false,
  answers:           [],   // { question, selected, correct, skipped }
  fcIndex:           0,
  fcQuestions:       [],
  fcFlipped:         false,
};

// ── DOM REFS ──
const screens = {
  home:        document.getElementById('screen-home'),
  name:        document.getElementById('screen-name'),
  categories:  document.getElementById('screen-categories'),
  quiz:        document.getElementById('screen-quiz'),
  review:      document.getElementById('screen-review'),
  results:     document.getElementById('screen-results'),
  leaderboard: document.getElementById('screen-leaderboard'),
  flashcards:  document.getElementById('screen-flashcards'),
};

// ══════════════════════════════════════════════
//  SCREEN NAVIGATION
// ══════════════════════════════════════════════
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ══════════════════════════════════════════════
//  HOME SCREEN
// ══════════════════════════════════════════════
document.getElementById('btn-play').addEventListener('click', () => {
  showScreen('name');
});

document.getElementById('btn-flashcards').addEventListener('click', () => {
  initFlashcards('all');
  showScreen('flashcards');
});

document.getElementById('btn-leaderboard').addEventListener('click', () => {
  renderLeaderboard();
  showScreen('leaderboard');
});

// ══════════════════════════════════════════════
//  NAME SCREEN
// ══════════════════════════════════════════════
document.getElementById('btn-name-next').addEventListener('click', () => {
  const name = document.getElementById('player-name').value.trim();
  if (!name) {
    document.getElementById('player-name').style.borderColor = '#e05c5c';
    document.getElementById('player-name').placeholder = 'Please enter your name!';
    return;
  }
  state.playerName = name;
  showScreen('categories');
});

document.getElementById('player-name').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') document.getElementById('btn-name-next').click();
});

document.getElementById('player-name').addEventListener('input', () => {
  document.getElementById('player-name').style.borderColor = '';
});

// ══════════════════════════════════════════════
//  CATEGORY SCREEN
// ══════════════════════════════════════════════
const categoryCards = document.querySelectorAll('.category-card');
const btnStartQuiz  = document.getElementById('btn-start-quiz');
const btnSelectAll  = document.getElementById('btn-select-all');

categoryCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('selected');
    updateCategoryState();
  });
});

function updateCategoryState() {
  state.selectedCategories = [...document.querySelectorAll('.category-card.selected')]
    .map(c => c.dataset.category);
  btnStartQuiz.disabled = state.selectedCategories.length === 0;
}

btnSelectAll.addEventListener('click', () => {
  const allSelected = state.selectedCategories.length === categoryCards.length;
  categoryCards.forEach(card => {
    allSelected ? card.classList.remove('selected') : card.classList.add('selected');
  });
  btnSelectAll.innerHTML = allSelected
    ? '<i class="fas fa-check-double"></i> Select All'
    : '<i class="fas fa-times"></i> Deselect All';
  updateCategoryState();
});

document.getElementById('btn-start-quiz').addEventListener('click', () => {
  startQuiz();
});

// ══════════════════════════════════════════════
//  QUIZ ENGINE
// ══════════════════════════════════════════════
function startQuiz() {
  // Reset state
  state.questions        = getQuestions(state.selectedCategories, 10);
  state.currentIndex     = 0;
  state.score            = 0;
  state.correctCount     = 0;
  state.answers          = [];
  state.usedLifeline5050 = false;
  state.usedLifelineSkip = false;

  // Reset lifeline buttons
  document.getElementById('lifeline-5050').classList.remove('used');
  document.getElementById('lifeline-skip').classList.remove('used');
  document.getElementById('lifeline-5050').disabled = false;
  document.getElementById('lifeline-skip').disabled = false;

  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q   = state.questions[state.currentIndex];
  const num = state.currentIndex + 1;
  const tot = state.questions.length;

  // Top bar
  document.getElementById('current-category').textContent =
    getCategoryEmoji(q.category) + ' ' + capitalise(q.category);
  document.getElementById('question-counter').textContent = `Q ${num} / ${tot}`;
  document.getElementById('live-score').textContent = state.score;

  // Progress bar
  document.getElementById('progress-fill').style.width =
    `${((num - 1) / tot) * 100}%`;

  // Question text
  document.getElementById('question-text').textContent = q.question;

  // Options
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className   = 'option-btn';
    btn.dataset.index = i;
    btn.textContent = `${labels[i]}. ${opt}`;
    btn.addEventListener('click', () => selectAnswer(i));
    grid.appendChild(btn);
  });

  // Reset lifelines for new question (keep used state)
  startTimer();
}

function selectAnswer(selectedIndex) {
  clearTimer();

  const q       = state.questions[state.currentIndex];
  const correct = q.answer;
  const buttons = document.querySelectorAll('.option-btn');

  // Disable all options
  buttons.forEach(btn => btn.disabled = true);

  // Highlight correct and wrong
  buttons[correct].classList.add('correct');
  if (selectedIndex !== correct) {
    buttons[selectedIndex].classList.add('wrong');
  }

  // Update score
  const isCorrect = selectedIndex === correct;
  if (isCorrect) {
    state.score        += 10;
    state.correctCount += 1;
  }

  // Record answer
  state.answers.push({
    question: q.question,
    options:  q.options,
    selected: selectedIndex,
    correct:  correct,
    skipped:  false,
  });

  document.getElementById('live-score').textContent = state.score;

  // Move to next after delay
  setTimeout(() => nextQuestion(), 1200);
}

function nextQuestion() {
  state.currentIndex++;
  if (state.currentIndex >= state.questions.length) {
    endQuiz();
  } else {
    renderQuestion();
  }
}

function endQuiz() {
  clearTimer();
  saveToLeaderboard();
  renderResults();
  showScreen('results');
}

// ══════════════════════════════════════════════
//  TIMER
// ══════════════════════════════════════════════
function startTimer() {
  clearTimer();
  state.timeLeft = state.totalTime;

  const arc      = document.getElementById('timer-arc');
  const timerTxt = document.getElementById('timer-text');
  const circumference = 283;

  function updateTimer() {
    // Update text
    timerTxt.textContent = state.timeLeft;

    // Update arc
    const offset = circumference - (state.timeLeft / state.totalTime) * circumference;
    arc.style.strokeDashoffset = offset;

    // Colour warning
    arc.classList.remove('warning', 'danger');
    if (state.timeLeft <= 5)       arc.classList.add('danger');
    else if (state.timeLeft <= 8)  arc.classList.add('warning');

    if (state.timeLeft <= 0) {
      clearTimer();
      timeUp();
      return;
    }
    state.timeLeft--;
  }

  updateTimer();
  state.timer = setInterval(updateTimer, 1000);
}

function clearTimer() {
  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
}

function timeUp() {
  const q = state.questions[state.currentIndex];

  // Record as skipped/timed-out
  state.answers.push({
    question: q.question,
    options:  q.options,
    selected: -1,
    correct:  q.answer,
    skipped:  true,
  });

  // Show correct answer
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.disabled = true);
  if (buttons[q.answer]) buttons[q.answer].classList.add('correct');

  setTimeout(() => nextQuestion(), 1200);
}

// ══════════════════════════════════════════════
//  LIFELINES
// ══════════════════════════════════════════════

// 50/50 — hide 2 wrong answers
document.getElementById('lifeline-5050').addEventListener('click', () => {
  if (state.usedLifeline5050) return;
  state.usedLifeline5050 = true;

  const btn5050 = document.getElementById('lifeline-5050');
  btn5050.classList.add('used');
  btn5050.disabled = true;

  const q       = state.questions[state.currentIndex];
  const correct = q.answer;
  const buttons = document.querySelectorAll('.option-btn');

  // Collect wrong indices
  let wrongIndices = [];
  buttons.forEach((btn, i) => {
    if (i !== correct && !btn.classList.contains('hidden')) {
      wrongIndices.push(i);
    }
  });

  // Shuffle and hide 2
  wrongIndices = wrongIndices.sort(() => Math.random() - 0.5).slice(0, 2);
  wrongIndices.forEach(i => buttons[i].classList.add('hidden'));
});

// Skip — move to next question, no score
document.getElementById('lifeline-skip').addEventListener('click', () => {
  if (state.usedLifelineSkip) return;
  state.usedLifelineSkip = true;

  const btnSkip = document.getElementById('lifeline-skip');
  btnSkip.classList.add('used');
  btnSkip.disabled = true;

  clearTimer();

  const q = state.questions[state.currentIndex];
  state.answers.push({
    question: q.question,
    options:  q.options,
    selected: -1,
    correct:  q.answer,
    skipped:  true,
  });

  setTimeout(() => nextQuestion(), 400);
});

// ══════════════════════════════════════════════
//  RESULTS SCREEN
// ══════════════════════════════════════════════
function renderResults() {
  const total    = state.questions.length;
  const correct  = state.correctCount;
  const accuracy = Math.round((correct / total) * 100);

  document.getElementById('final-score').textContent    = state.score;
  document.getElementById('final-correct').textContent  = `${correct}/${total}`;
  document.getElementById('final-accuracy').textContent = `${accuracy}%`;

  // Dynamic emoji + title based on score
  let emoji, title, sub;
  if (accuracy >= 90) {
    emoji = '🐐'; title = "You're the GOAT!";
    sub   = "Absolutely legendary. No one comes close!";
  } else if (accuracy >= 70) {
    emoji = '🏆'; title = "GOAT Contender!";
    sub   = "Strong performance. You clearly know your stuff!";
  } else if (accuracy >= 50) {
    emoji = '😤'; title = "Not Bad, Not Bad...";
    sub   = "You're halfway there. More rewatching needed!";
  } else if (accuracy >= 30) {
    emoji = '😅'; title = "Ek Baar Aur Try Karo!";
    sub   = "You tried. That's what counts... right?";
  } else {
    emoji = '💀'; title = "GOAT Nahi, Bakra Hai Tu!";
    sub   = "It's okay. Netflix is always there for you 🍿";
  }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-sub').textContent   = sub;
}

// Results → Review
document.getElementById('btn-review-answers').addEventListener('click', () => {
  renderReview();
  showScreen('review');
});

// Results → Play Again
document.getElementById('btn-play-again').addEventListener('click', () => {
  // Reset category selections
  categoryCards.forEach(c => c.classList.remove('selected'));
  btnSelectAll.innerHTML = '<i class="fas fa-check-double"></i> Select All';
  state.selectedCategories = [];
  btnStartQuiz.disabled = true;
  showScreen('categories');
});

// Results → Leaderboard
document.getElementById('btn-go-leaderboard').addEventListener('click', () => {
  renderLeaderboard();
  showScreen('leaderboard');
});

// ══════════════════════════════════════════════
//  REVIEW SCREEN
// ══════════════════════════════════════════════
function renderReview() {
  const correct = state.correctCount;
  const total   = state.questions.length;

  document.getElementById('review-sub').textContent =
    `You got ${correct} out of ${total} correct!`;

  const list = document.getElementById('review-list');
  list.innerHTML = '';

  state.answers.forEach((ans, i) => {
    const item = document.createElement('div');

    if (ans.skipped) {
      item.className = 'review-item skipped-item';
      item.innerHTML = `
        <div class="review-q">Q${i + 1}. ${ans.question}</div>
        <div class="review-answers">
          <span class="review-skipped-label">⏭ Skipped / Timed Out</span>
          <span class="review-correct-ans">✅ Correct: ${ans.options[ans.correct]}</span>
        </div>`;
    } else if (ans.selected === ans.correct) {
      item.className = 'review-item correct-item';
      item.innerHTML = `
        <div class="review-q">Q${i + 1}. ${ans.question}</div>
        <div class="review-answers">
          <span class="review-correct-ans">✅ Your answer: ${ans.options[ans.selected]}</span>
        </div>`;
    } else {
      item.className = 'review-item wrong-item';
      item.innerHTML = `
        <div class="review-q">Q${i + 1}. ${ans.question}</div>
        <div class="review-answers">
          <span class="review-your">❌ Your answer: ${ans.options[ans.selected]}</span>
          <span class="review-correct-ans">✅ Correct: ${ans.options[ans.correct]}</span>
        </div>`;
    }
    list.appendChild(item);
  });
}

document.getElementById('btn-review-done').addEventListener('click', () => {
  showScreen('results');
});

// ══════════════════════════════════════════════
//  LEADERBOARD
// ══════════════════════════════════════════════
function saveToLeaderboard() {
  const entry = {
    name:     state.playerName,
    score:    state.score,
    correct:  state.correctCount,
    total:    state.questions.length,
    accuracy: Math.round((state.correctCount / state.questions.length) * 100),
    date:     new Date().toLocaleDateString(),
  };

  let board = JSON.parse(localStorage.getItem('goatLeaderboard') || '[]');
  board.push(entry);
  board.sort((a, b) => b.score - a.score);
  board = board.slice(0, 10); // Keep top 10
  localStorage.setItem('goatLeaderboard', JSON.stringify(board));
}

function renderLeaderboard() {
  const board = JSON.parse(localStorage.getItem('goatLeaderboard') || '[]');
  const list  = document.getElementById('leaderboard-list');
  list.innerHTML = '';

  if (board.length === 0) {
    list.innerHTML = `
      <div class="lb-empty">
        <div style="font-size:48px; margin-bottom:1rem;">🏆</div>
        <p>No scores yet!</p>
        <p style="margin-top:6px;">Play a quiz to get on the board.</p>
      </div>`;
    return;
  }

  const medals = ['🥇', '🥈', '🥉'];

  board.forEach((entry, i) => {
    const item = document.createElement('div');
    item.className = 'lb-item';
    item.innerHTML = `
      <div class="lb-rank">${medals[i] || i + 1}</div>
      <div class="lb-name">
        ${entry.name}
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">
          ${entry.correct}/${entry.total} correct · ${entry.accuracy}% · ${entry.date}
        </div>
      </div>
      <div class="lb-score">${entry.score}</div>`;
    list.appendChild(item);
  });
}

document.getElementById('btn-lb-home').addEventListener('click', () => {
  showScreen('home');
});

// ══════════════════════════════════════════════
//  FLASHCARD MODE
// ══════════════════════════════════════════════
function initFlashcards(category) {
  state.fcQuestions = getAllQuestions(category);
  state.fcIndex     = 0;
  state.fcFlipped   = false;
  renderFlashcard();
}

function renderFlashcard() {
  if (state.fcQuestions.length === 0) return;

  const q = state.fcQuestions[state.fcIndex];

  document.getElementById('fc-question').textContent = q.question;
  document.getElementById('fc-answer').textContent   = q.options[q.answer];
  document.getElementById('fc-counter').textContent  =
    `${state.fcIndex + 1} / ${state.fcQuestions.length}`;

  // Reset flip
  state.fcFlipped = false;
  document.getElementById('flashcard').classList.remove('flipped');
}

// Tap card to flip
document.getElementById('flashcard').addEventListener('click', () => {
  state.fcFlipped = !state.fcFlipped;
  document.getElementById('flashcard').classList.toggle('flipped', state.fcFlipped);
});

// Prev / Next
document.getElementById('fc-prev').addEventListener('click', () => {
  if (state.fcIndex > 0) {
    state.fcIndex--;
    renderFlashcard();
  }
});

document.getElementById('fc-next').addEventListener('click', () => {
  if (state.fcIndex < state.fcQuestions.length - 1) {
    state.fcIndex++;
    renderFlashcard();
  }
});

// Category filter buttons
document.querySelectorAll('.fc-cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.fc-cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    initFlashcards(btn.dataset.cat);
  });
});

document.getElementById('btn-fc-home').addEventListener('click', () => {
  showScreen('home');
});

// ══════════════════════════════════════════════
//  HELPERS
// ══════════════════════════════════════════════
function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getCategoryEmoji(cat) {
  const map = {
    sitcoms:    '📺',
    movies:     '🎬',
    music:      '🎵',
    gaming:     '🎮',
    ott:        '🍿',
    popculture: '🌍',
  };
  return map[cat] || '❓';
}