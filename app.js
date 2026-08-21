const pronouns = [
  {
    id: "ako", choice: "I", sub: "one speaker", meaning: "I / me", badge: "speaker · singular",
    note: "Use ako when only the speaker is meant.",
    cases: [
      ["Ang set", "ako", "focused participant", "Kumain ako. — I ate."],
      ["Ng set", "ko", "non-focused actor or possessor", "Kinain ko iyon. — I ate that."],
      ["Sa set", "sa akin", "direction, recipient, or oblique role", "Ibigay mo sa akin. — Give it to me."]
    ]
  },
  {
    id: "ikaw", choice: "You", sub: "one listener", meaning: "you", badge: "listener · singular",
    note: "Ikaw often starts or contrasts a phrase. The shorter ka usually follows the first word: Kumain ka.",
    cases: [
      ["Ang set", "ikaw / ka", "focused participant", "Ikaw ang susunod. / Kumain ka."],
      ["Ng set", "mo", "non-focused actor or possessor", "Kinain mo iyon. — You ate that."],
      ["Sa set", "sa iyo", "direction, recipient, or oblique role", "Para sa iyo ito. — This is for you."]
    ]
  },
  {
    id: "siya", choice: "They", sub: "one other person", meaning: "he / she / singular they", badge: "other · singular",
    note: "Siya does not mark gender. Context supplies he, she, or singular they.",
    cases: [
      ["Ang set", "siya", "focused participant", "Dumating siya. — They arrived."],
      ["Ng set", "niya", "non-focused actor or possessor", "Binasa niya iyon. — They read that."],
      ["Sa set", "sa kaniya", "direction, recipient, or oblique role", "Sabihin mo sa kaniya. — Tell them."]
    ]
  },
  {
    id: "kami", choice: "We", sub: "not the listener", meaning: "we / us (exclusive)", badge: "speaker group · exclusive",
    note: "Kami excludes the person being spoken to: “we, but not you.”",
    cases: [
      ["Ang set", "kami", "focused participant", "Aalis kami. — We are leaving."],
      ["Ng set", "namin", "non-focused actor or possessor", "Ginawa namin iyon. — We did that."],
      ["Sa set", "sa amin", "direction, recipient, or oblique role", "Sumama ka sa amin. — Come with us."]
    ]
  },
  {
    id: "tayo", choice: "We", sub: "including listener", meaning: "we / us (inclusive)", badge: "speaker + listener · inclusive",
    note: "Tayo includes the person being spoken to: “you and I / all of us.”",
    cases: [
      ["Ang set", "tayo", "focused participant", "Kakain tayo. — We will eat."],
      ["Ng set", "natin", "non-focused actor or possessor", "Tapusin natin ito. — Let’s finish this."],
      ["Sa set", "sa atin", "direction, recipient, or oblique role", "Para sa atin ito. — This is for us."]
    ]
  },
  {
    id: "kayo", choice: "You all", sub: "or respectful you", meaning: "you (plural or respectful)", badge: "listener · plural / respectful",
    note: "Kayo addresses several listeners and may also respectfully address one person.",
    cases: [
      ["Ang set", "kayo", "focused participant", "Kumusta kayo? — How are you?"],
      ["Ng set", "ninyo", "non-focused actor or possessor", "Nakita ninyo ba? — Did you see it?"],
      ["Sa set", "sa inyo", "direction, recipient, or oblique role", "Nasa inyo ang susi. — You have the key." ]
    ]
  },
  {
    id: "sila", choice: "They", sub: "several people", meaning: "they / them", badge: "others · plural",
    note: "Sila is plural and does not mark gender.",
    cases: [
      ["Ang set", "sila", "focused participant", "Nagtatrabaho sila. — They are working."],
      ["Ng set", "nila", "non-focused actor or possessor", "Binili nila iyon. — They bought that."],
      ["Sa set", "sa kanila", "direction, recipient, or oblique role", "Ipadala mo sa kanila. — Send it to them."]
    ]
  }
];

const focusData = {
  actor: {
    label: "Actor", icon: "🧑", focused: "buyer", marker: "ako",
    forms: { completed: "Bumili", ongoing: "Bumibili", contemplated: "Bibili" },
    plain: { completed: "Bumili ako ng isda.", ongoing: "Bumibili ako ng isda.", contemplated: "Bibili ako ng isda." },
    polite: { completed: "Bumili po ako ng isda.", ongoing: "Bumibili po ako ng isda.", contemplated: "Bibili po ako ng isda." },
    translation: { completed: "I bought fish.", ongoing: "I am buying / regularly buy fish.", contemplated: "I will buy fish." },
    explanation: "The buyer is the focused participant, so the actor uses the ang-set pronoun ako. The object is non-focused and takes ng.",
    caution: "Actor-focus bumili is a common way to report what the buyer did."
  },
  object: {
    label: "Object", icon: "🐟", focused: "fish", marker: "ang isda",
    forms: { completed: "Binili", ongoing: "Binibili", contemplated: "Bibilhin" },
    plain: { completed: "Binili ko ang isda.", ongoing: "Binibili ko ang isda.", contemplated: "Bibilhin ko ang isda." },
    polite: { completed: "Binili ko po ang isda.", ongoing: "Binibili ko po ang isda.", contemplated: "Bibilhin ko po ang isda." },
    translation: { completed: "I bought the fish.", ongoing: "I am buying / regularly buy the fish.", contemplated: "I will buy the fish." },
    explanation: "The fish is focused and takes ang. The buyer is now non-focused, so ako changes to the ng-set form ko.",
    caution: "Object focus often presents a specific, identifiable, or affected object. It is not just English passive voice."
  },
  location: {
    label: "Location", icon: "🏪", focused: "shop", marker: "ang tindahan",
    forms: { completed: "Binilhan", ongoing: "Binibilhan", contemplated: "Bibilhan" },
    plain: { completed: "Binilhan ko ng isda ang tindahan.", ongoing: "Binibilhan ko ng isda ang tindahan.", contemplated: "Bibilhan ko ng isda ang tindahan." },
    polite: { completed: "Binilhan ko po ng isda ang tindahan.", ongoing: "Binibilhan ko po ng isda ang tindahan.", contemplated: "Bibilhan ko po ng isda ang tindahan." },
    translation: { completed: "I bought fish from the shop.", ongoing: "I buy fish from the shop.", contemplated: "I will buy fish from the shop." },
    explanation: "The shop/source is the focused participant and takes ang. The buyer is non-focused (ko), and the thing bought takes ng.",
    caution: "This textbook locative use of binilhan can sound formal or dated. For a shop/source, speakers may prefer pinagbilhan or restructure the sentence."
  },
  beneficiary: {
    label: "Beneficiary", icon: "👩", focused: "Ana", marker: "si Ana",
    forms: { completed: "Ibinili", ongoing: "Ibinibili", contemplated: "Ibibili" },
    plain: { completed: "Ibinili ko ng isda si Ana.", ongoing: "Ibinibili ko ng isda si Ana.", contemplated: "Ibibili ko ng isda si Ana." },
    polite: { completed: "Ibinili ko po ng isda si Ana.", ongoing: "Ibinibili ko po ng isda si Ana.", contemplated: "Ibibili ko po ng isda si Ana." },
    translation: { completed: "I bought fish for Ana.", ongoing: "I buy fish for Ana.", contemplated: "I will buy fish for Ana." },
    explanation: "Ana benefits from the action and is focused. A personal name uses si rather than ang; the buyer is expressed by ko.",
    caution: "Textbook ibinili can sound formal. Everyday speech may use binilhan for the beneficiary; affix choice is lexical and varies with context."
  },
  instrument: {
    label: "Instrument", icon: "💵", focused: "money", marker: "ang pera",
    forms: { completed: "Ipinambili", ongoing: "Ipinambibili", contemplated: "Ipambibili" },
    plain: { completed: "Ipinambili ko ng isda ang pera.", ongoing: "Ipinambibili ko ng isda ang pera.", contemplated: "Ipambibili ko ng isda ang pera." },
    polite: { completed: "Ipinambili ko po ng isda ang pera.", ongoing: "Ipinambibili ko po ng isda ang pera.", contemplated: "Ipambibili ko po ng isda ang pera." },
    translation: { completed: "I used the money to buy fish.", ongoing: "I use the money to buy fish.", contemplated: "I will use the money to buy fish." },
    explanation: "The money used for buying is focused and takes ang. The buyer is non-focused and uses ko.",
    caution: "Instrument-focus forms are useful but less central in beginner conversation than actor and object focus."
  }
};

const quiz = [
  {
    question: "You mean “we,” and the listener is included. Which ang-set pronoun fits?",
    context: "You are inviting your friend: “We will eat.”",
    options: ["kami", "tayo", "sila"], answer: 1,
    explanation: "Tayo includes the listener. Kami explicitly leaves the listener out."
  },
  {
    question: "Which sentence puts the mango in focus?",
    context: "Look for both an object-focus verb and ang on the mango.",
    options: ["Kumain ako ng mangga.", "Kinain ko ang mangga.", "Kumain ko ang mangga."], answer: 1,
    explanation: "Kinain is object focus, ang mangga is focused, and the non-focused actor is ko."
  },
  {
    question: "Which is the natural respectful version of “I am not tired”?",
    context: "Po normally settles after the first word or phrase.",
    options: ["Hindi ako po pagod.", "Po hindi ako pagod.", "Hindi po ako pagod."], answer: 2,
    explanation: "With hindi first, po follows it: Hindi po ako pagod."
  },
  {
    question: "The actor is non-focused and means “I.” Which pronoun do you need?",
    context: "___ + object-focus verb relationship",
    options: ["ako", "ko", "sa akin"], answer: 1,
    explanation: "A non-focused first-person singular actor uses the ng-set form ko."
  },
  {
    question: "Which sentence focuses the buyer?",
    context: "The buyer should use the ang-set pronoun.",
    options: ["Binili ko ang isda.", "Bumili ako ng isda.", "Ipinambili ko ng isda ang pera."], answer: 1,
    explanation: "Bumili is actor focus, so the focused buyer is expressed as ako."
  }
];

const personChoices = document.querySelector("#personChoices");
const caseCards = document.querySelector("#caseCards");
let selectedPerson = pronouns[0].id;

function renderPronouns() {
  personChoices.innerHTML = pronouns.map(person => `
    <button class="person-choice ${person.id === selectedPerson ? "active" : ""}" type="button" role="radio" aria-checked="${person.id === selectedPerson}" data-person="${person.id}">
      <strong>${person.choice}</strong><small>${person.sub}</small>
    </button>`).join("");

  const person = pronouns.find(item => item.id === selectedPerson);
  document.querySelector("#personMeaning").textContent = person.meaning;
  document.querySelector("#personBadge").textContent = person.badge;
  document.querySelector("#inclusiveNote").textContent = person.note;
  caseCards.innerHTML = person.cases.map(item => `
    <article class="case-card">
      <span class="case-name">${item[0]}</span>
      <h4>${item[1]}</h4>
      <p>${item[2]}</p>
      <span class="example">${item[3]}</span>
    </article>`).join("");
}

personChoices.addEventListener("click", event => {
  const button = event.target.closest("[data-person]");
  if (!button) return;
  selectedPerson = button.dataset.person;
  renderPronouns();
});

const dialogueCard = document.querySelector("#dialogueCard");
function renderRespect(tone) {
  const polite = tone === "polite";
  dialogueCard.innerHTML = `
    <div class="speech"><strong>${polite ? "Kumusta po kayo?" : "Kumusta ka?"}</strong><small>${polite ? "How are you? (respectful)" : "How are you? (casual)"}</small></div>
    <div class="speech reply"><strong>${polite ? "Mabuti po. Salamat po." : "Mabuti. Salamat."}</strong><small>${polite ? "I’m well. Thank you. (respectful)" : "I’m well. Thanks."}</small></div>`;
  document.querySelector("#placementPattern").textContent = polite ? "Hindi + po + ako + pagod." : "Hindi + ako + pagod.";
  document.querySelector("#placementNote").textContent = polite
    ? "Po follows the negator; the pronoun comes next."
    : "Without po, the pronoun follows the negator.";
  document.querySelectorAll(".respect-button").forEach(button => {
    const active = button.dataset.tone === tone;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

document.querySelectorAll(".respect-button").forEach(button => {
  button.addEventListener("click", () => renderRespect(button.dataset.tone));
});

const focusChoices = document.querySelector("#focusChoices");
const aspectChoices = document.querySelector("#aspectChoices");
let selectedFocus = "actor";
let selectedAspect = "completed";

function renderFocusControls() {
  focusChoices.innerHTML = Object.entries(focusData).map(([key, data]) => `
    <button type="button" class="focus-option ${key === selectedFocus ? "active" : ""}" data-focus="${key}" aria-pressed="${key === selectedFocus}">${data.icon} ${data.label}</button>`).join("");
  aspectChoices.innerHTML = [
    ["completed", "Completed"], ["ongoing", "Ongoing"], ["contemplated", "Contemplated"]
  ].map(([key, label]) => `<button type="button" class="aspect-option ${key === selectedAspect ? "active" : ""}" data-aspect="${key}" aria-pressed="${key === selectedAspect}">${label}</button>`).join("");
}

function highlightFocus(sentence, marker) {
  return sentence.replace(marker, `<span class="sentence-highlight">${marker}</span>`);
}

function renderFocus() {
  renderFocusControls();
  const data = focusData[selectedFocus];
  const polite = document.querySelector("#poToggle").checked;
  const sentence = polite ? data.polite[selectedAspect] : data.plain[selectedAspect];
  document.querySelector("#focusSentence").innerHTML = highlightFocus(sentence, data.marker);
  document.querySelector("#focusTranslation").textContent = data.translation[selectedAspect];
  document.querySelector("#focusTag").textContent = `${data.label} focus`;
  document.querySelector("#focusForm").textContent = data.forms[selectedAspect].toLowerCase();
  document.querySelector("#focusExplanation").textContent = data.explanation;
  document.querySelector("#focusCaution").textContent = data.caution;
}

focusChoices.addEventListener("click", event => {
  const button = event.target.closest("[data-focus]");
  if (!button) return;
  selectedFocus = button.dataset.focus;
  renderFocus();
});
aspectChoices.addEventListener("click", event => {
  const button = event.target.closest("[data-aspect]");
  if (!button) return;
  selectedAspect = button.dataset.aspect;
  renderFocus();
});
document.querySelector("#poToggle").addEventListener("change", renderFocus);

let questionIndex = 0;
let score = 0;
let answered = false;

function renderQuiz() {
  document.querySelector("#quizCounter").textContent = `Question ${questionIndex + 1} of ${quiz.length}`;
  document.querySelector("#quizScore").textContent = `${score} correct`;
  document.querySelector("#progressBar").style.width = `${((questionIndex + 1) / quiz.length) * 100}%`;
  const item = quiz[questionIndex];
  answered = false;
  document.querySelector("#quizStage").innerHTML = `
    <h3 class="quiz-question">${item.question}</h3>
    <p class="quiz-context">${item.context}</p>
    <div class="quiz-options">
      ${item.options.map((option, index) => `<button type="button" class="quiz-option" data-answer="${index}"><strong>${String.fromCharCode(65 + index)}.</strong> ${option}</button>`).join("")}
    </div>
    <div class="quiz-feedback" aria-live="polite"><span>Choose an answer to see why.</span></div>`;
}

document.querySelector("#quizStage").addEventListener("click", event => {
  const answerButton = event.target.closest("[data-answer]");
  const nextButton = event.target.closest("[data-next]");
  if (nextButton) {
    if (questionIndex < quiz.length - 1) {
      questionIndex += 1;
      renderQuiz();
    } else {
      document.querySelector("#quizStage").innerHTML = `
        <div class="quiz-finish"><p class="section-number">Round complete</p><strong>${score}/${quiz.length}</strong><h3>Meaning first. Form second.</h3><p>You can rerun the questions or explore another focus above.</p><button type="button" class="button button-primary quiz-next" data-restart>Practice again</button></div>`;
    }
    return;
  }
  if (event.target.closest("[data-restart]")) {
    questionIndex = 0; score = 0; renderQuiz(); return;
  }
  if (!answerButton || answered) return;
  answered = true;
  const item = quiz[questionIndex];
  const selected = Number(answerButton.dataset.answer);
  const correct = selected === item.answer;
  if (correct) score += 1;
  document.querySelector("#quizScore").textContent = `${score} correct`;
  document.querySelectorAll(".quiz-option").forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add("correct");
    else if (index === selected) button.classList.add("incorrect");
  });
  document.querySelector(".quiz-feedback").innerHTML = `<strong>${correct ? "Tama — correct." : "Not quite."}</strong><span>${item.explanation}</span><button type="button" class="button button-primary quiz-next" data-next>${questionIndex === quiz.length - 1 ? "See my result" : "Next question"}</button>`;
});

renderPronouns();
renderRespect("casual");
renderFocus();
renderQuiz();
