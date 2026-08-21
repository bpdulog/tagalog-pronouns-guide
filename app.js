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

const studioDrills = [
  {
    tag: "Focus choice", prompt: "You are simply reporting Ana’s activity. Which clause is the most direct starting point?",
    context: "Keep Ana in actor focus; fish is the non-focused object.",
    options: ["Bumili si Ana ng isda.", "Binili ni Ana ang isda.", "Ipinambili ni Ana ng isda ang pera."], answer: 0,
    explanation: "Bumili puts the actor in focus, so si Ana is the focused participant and fish stays in an ng phrase."
  },
  {
    tag: "Focus choice", prompt: "The listener already knows which fish you mean. You want to say that you bought it.",
    context: "Make the specific fish the focused participant.",
    options: ["Bumili ako ng isda.", "Binili ko ang isda.", "Bumili ko ang isda."], answer: 1,
    explanation: "Object focus uses binili; the specific fish is marked ang and the actor shifts from ako to ko."
  },
  {
    tag: "Aspect", prompt: "Choose the contemplated actor-focus form of kain for “I will eat.”",
    context: "The -um- family drops the infix and repeats the first consonant-vowel in contemplated forms.",
    options: ["Kumakain ako.", "Kakain ako.", "Kinain ko ang pagkain."], answer: 1,
    explanation: "Kakain is contemplated actor focus. Kumakain is ongoing; kinain is completed object focus."
  },
  {
    tag: "Verb family", prompt: "You will cook food for Ana. Which benefactive pattern matches that goal?",
    context: "The beneficiary—not the food—is the focused participant in an ipag- pattern.",
    options: ["Magluluto ako ng ulam si Ana.", "Ipagluluto ko si Ana ng ulam.", "Nagluluto si Ana ng ulam ko."], answer: 1,
    explanation: "Ipagluluto is contemplated benefactive focus. Ko is the non-focused actor; si Ana is the beneficiary in focus."
  },
  {
    tag: "Pronoun role", prompt: "You are inviting the person you are speaking to: “We will leave.”",
    context: "The listener is included in “we.”",
    options: ["Aalis kami.", "Aalis tayo.", "Aalis sila."], answer: 1,
    explanation: "Tayo includes the listener. Kami means “we, but not you.”"
  },
  {
    tag: "Order & negation", prompt: "You have not bought fish yet. Which actor-focus clause is natural?",
    context: "Place the negator first and keep the short focused pronoun near the front.",
    options: ["Hindi pa ako bumili ng isda.", "Hindi bumili ako pa ng isda.", "Ako hindi pa bumili ng isda."], answer: 0,
    explanation: "Hindi pa ako bumili ng isda keeps the negator and particles at the front, followed by the short pronoun."
  },
  {
    tag: "Respect", prompt: "Ask one older person respectfully, “Have you eaten already?”",
    context: "Use respectful kayo and keep po and ba near the predicate.",
    options: ["Kumain na po ba kayo?", "Po kumain kayo na ba?", "Kumain kayo po ba na?"], answer: 0,
    explanation: "Kumain na po ba kayo? is a common respectful predicate-first question. Kayo can address one person respectfully."
  },
  {
    tag: "Topic-first", prompt: "You want to contrast the fish as topic: “The fish, Ana bought it.”",
    context: "Use ay for the marked topic-first alternative.",
    options: ["Ang isda ay binili ni Ana.", "Ang isda binili si Ana.", "Binili ang isda si Ana ay."], answer: 0,
    explanation: "Ang isda ay binili ni Ana fronts the object as topic. The more neutral order begins with Binili."
  },
  {
    tag: "Location focus", prompt: "The table is the affected location: “I will wipe the table.”",
    context: "Use the -an locative family and mark the table with ang.",
    options: ["Pupunasan ko ang mesa.", "Pupunas ako ng mesa.", "Pinupunasan ang mesa ako."], answer: 0,
    explanation: "Pupunasan is contemplated locative focus. The table is ang-marked and the actor is ko."
  },
  {
    tag: "Possession", prompt: "You point to a book and say, “The book is mine.”",
    context: "Use the sa-set base as a possessive predicate.",
    options: ["Akin ang libro.", "Ko ang libro.", "Sa ako ang libro."], answer: 0,
    explanation: "Akin ang libro uses the possessive predicate akin. For “my book,” the noun phrase is libro ko."
  }
];

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
  },
  {
    question: "Which form means “is cooking” in the actor-focus mag- family?",
    context: "For ongoing action, mag- becomes nag- and the root’s first syllable repeats.",
    options: ["nagluto", "nagluluto", "magluluto"], answer: 1,
    explanation: "Nagluluto is ongoing: nag- + the repeated first syllable lu + luto. Nagluto is completed; magluluto is contemplated."
  },
  {
    question: "Which object-focus form of bili expresses contemplated action?",
    context: "The -in / -hin family repeats the first consonant-vowel in contemplated forms.",
    options: ["binili", "binibili", "bibilhin"], answer: 2,
    explanation: "Bibilhin is the contemplated object-focus form. Binili is completed and binibili is ongoing."
  },
  {
    question: "Which is the safest neutral word order for “Ana bought fish at the market”?",
    context: "Start with a predicate, then use markers to identify each participant.",
    options: ["Si Ana isda bumili palengke.", "Bumili si Ana ng isda sa palengke.", "Ng isda sa palengke si Ana bumili."], answer: 1,
    explanation: "The dependable pattern is predicate first: Bumili + focused actor si Ana + object ng isda + location sa palengke."
  },
  {
    question: "Which object-focus sentence places a short actor pronoun and po naturally?",
    context: "Short pronouns and po gather near the first word.",
    options: ["Binili po ko ang isda.", "Binili ko po ang isda.", "Binili ang isda po ko."], answer: 1,
    explanation: "Ko is a short pronoun and comes before po in this cluster: Binili ko po ang isda."
  },
  {
    question: "Which sentence correctly uses an ang-set pronoun?",
    context: "The set name describes the pronoun’s role; it is not an extra marker.",
    options: ["Kumain ang ako.", "Kumain ako.", "Kumain ng ako."], answer: 1,
    explanation: "Say Kumain ako. Pronouns already encode their set, so ang is not placed before ako."
  },
  {
    question: "How do you naturally say “my book”?",
    context: "A possessive ng-set pronoun follows the noun it modifies.",
    options: ["ko libro", "libro ako", "libro ko"], answer: 2,
    explanation: "Libro ko means “my book.” Ko follows the possessed noun. Akin ang libro instead means “The book is mine.”"
  },
  {
    question: "Which sentence uses the special form kita correctly?",
    context: "Kita can combine a first-person singular actor with a singular listener as the other participant.",
    options: ["Nakita kita.", "Kumain kita.", "Nakita tayo."], answer: 0,
    explanation: "Nakita kita means “I saw you.” Kita is a special speaker-to-listener combination, not the inclusive pronoun tayo."
  },
  {
    question: "Which verb family is a safe actor-focus starting point for “to sleep”?",
    context: "Some actor-focus verbs belong to the ma- family rather than -um- or mag-.",
    options: ["matulog", "tulugan", "itinulog"], answer: 0,
    explanation: "Matulog is an ma- actor-focus verb. Its completed form is natulog, its ongoing form is natutulog, and its contemplated form is matutulog."
  },
  {
    question: "You want to foreground the beneficiary in “I will cook food for Ana.” Which form fits?",
    context: "Look for the contemplated ipag- benefactive pattern.",
    options: ["magluluto", "ipagluluto", "nagluluto"], answer: 1,
    explanation: "Ipagluluto is contemplated benefactive focus. It makes Ana, the person who benefits, the focused participant."
  },
  {
    question: "Which sentence is a natural topic-first alternative to Binili ni Ana ang isda?",
    context: "Topic-fronting commonly uses ay.",
    options: ["Ang isda ay binili ni Ana.", "Ang isda ni Ana binili ay.", "Ay binili ni Ana ang isda."], answer: 0,
    explanation: "Ang isda ay binili ni Ana puts the known fish first as topic. The predicate-first version remains the more neutral default."
  },
  {
    question: "Which sentence means “I have not bought fish yet”?",
    context: "Use predicate-first order with hindi, pa, and the focused first-person pronoun.",
    options: ["Hindi pa ako bumili ng isda.", "Hindi ako bumili pa ng isda.", "Ako hindi pa bumili ng isda."], answer: 0,
    explanation: "Hindi pa ako bumili ng isda places the negator and particle at the front, followed by the short pronoun."
  },
  {
    question: "Which sentence asks one older person respectfully, “Have you eaten already?”",
    context: "Respectful kayo can be singular; po and ba occur near the predicate.",
    options: ["Kumain na po ba kayo?", "Kumain kayo po na ba?", "Po kumain na kayo ba?"], answer: 0,
    explanation: "Kumain na po ba kayo? is a natural respectful question. Kayo may address one person respectfully."
  },
  {
    question: "Which sentence makes the table the focused participant?",
    context: "The -an family can put a location or affected surface in focus.",
    options: ["Pupunasan ko ang mesa.", "Pupunas ako ng mesa.", "Pinunasan ako ng mesa."], answer: 0,
    explanation: "Pupunasan ko ang mesa uses contemplated locative focus: the table is ang-marked and the actor is ko."
  },
  {
    question: "Which statement means “The book is mine”?",
    context: "Use the sa-set base as a possessive predicate.",
    options: ["Libro ko ang akin.", "Akin ang libro.", "Ako ang libro."], answer: 1,
    explanation: "Akin ang libro means “The book is mine.” Libro ko is the noun phrase “my book.”"
  },
  {
    question: "What is the best first step before choosing a Tagalog verb form?",
    context: "Verb affixes depend on the event role that will be in focus.",
    options: ["Translate each English word in order.", "Choose the participant or role to put in focus.", "Add ang before the subject pronoun."], answer: 1,
    explanation: "Decide what role the clause will focus first. Then select a verb family that licenses it, choose aspect, and match the markers and pronouns."
  }
];

const personChoices = document.querySelector("#personChoices");
const caseCards = document.querySelector("#caseCards");
let selectedPerson = pronouns[0].id;

function renderPronouns() {
  personChoices.innerHTML = pronouns.map(person => `
    <button class="person-choice ${person.id === selectedPerson ? "active" : ""}" type="button" role="radio" aria-checked="${person.id === selectedPerson}" tabindex="${person.id === selectedPerson ? "0" : "-1"}" data-person="${person.id}">
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
  restoreChoiceFocus(personChoices, "[data-person]", "person", selectedPerson);
});

function restoreChoiceFocus(group, selector, dataKey, value) {
  requestAnimationFrame(() => {
    const selected = [...group.querySelectorAll(selector)].find(button => button.dataset[dataKey] === value);
    selected?.focus();
  });
}

function handleRadioKeys(event, selector, onSelect) {
  if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
  const group = event.currentTarget;
  const buttons = [...group.querySelectorAll(selector)];
  const currentIndex = buttons.indexOf(document.activeElement);
  if (currentIndex < 0) return;
  event.preventDefault();
  let nextIndex;
  if (event.key === "Home") nextIndex = 0;
  else if (event.key === "End") nextIndex = buttons.length - 1;
  else {
    const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
    nextIndex = (currentIndex + direction + buttons.length) % buttons.length;
  }
  onSelect(buttons[nextIndex].dataset);
  requestAnimationFrame(() => group.querySelectorAll(selector)[nextIndex].focus());
}

personChoices.addEventListener("keydown", event => {
  handleRadioKeys(event, "[data-person]", data => {
    selectedPerson = data.person;
    renderPronouns();
  });
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
    <button type="button" role="radio" class="focus-option ${key === selectedFocus ? "active" : ""}" data-focus="${key}" aria-checked="${key === selectedFocus}" tabindex="${key === selectedFocus ? "0" : "-1"}">${data.icon} ${data.label}</button>`).join("");
  aspectChoices.innerHTML = [
    ["completed", "Completed"], ["ongoing", "Ongoing"], ["contemplated", "Contemplated"]
  ].map(([key, label]) => `<button type="button" role="radio" class="aspect-option ${key === selectedAspect ? "active" : ""}" data-aspect="${key}" aria-checked="${key === selectedAspect}" tabindex="${key === selectedAspect ? "0" : "-1"}">${label}</button>`).join("");
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
  restoreChoiceFocus(focusChoices, "[data-focus]", "focus", selectedFocus);
});
aspectChoices.addEventListener("click", event => {
  const button = event.target.closest("[data-aspect]");
  if (!button) return;
  selectedAspect = button.dataset.aspect;
  renderFocus();
  restoreChoiceFocus(aspectChoices, "[data-aspect]", "aspect", selectedAspect);
});
focusChoices.addEventListener("keydown", event => {
  handleRadioKeys(event, "[data-focus]", data => {
    selectedFocus = data.focus;
    renderFocus();
  });
});
aspectChoices.addEventListener("keydown", event => {
  handleRadioKeys(event, "[data-aspect]", data => {
    selectedAspect = data.aspect;
    renderFocus();
  });
});
document.querySelector("#poToggle").addEventListener("change", renderFocus);

const studioStage = document.querySelector("#studioStage");
let studioIndex = 0;
let studioScore = 0;
let studioAnswered = false;

function renderStudio() {
  const item = studioDrills[studioIndex];
  studioAnswered = false;
  studioStage.innerHTML = `
    <div class="studio-meta"><span>Studio prompt ${studioIndex + 1} of ${studioDrills.length}</span><span class="studio-tag">${item.tag}</span></div>
    <h3 class="studio-prompt">${item.prompt}</h3>
    <p class="studio-context">${item.context}</p>
    <div class="studio-options">
      ${item.options.map((option, index) => `<button type="button" class="studio-option" data-studio-answer="${index}"><strong>${String.fromCharCode(65 + index)}.</strong> ${option}</button>`).join("")}
    </div>
    <div class="studio-feedback" aria-live="polite"><span>Choose the complete clause that preserves the intended relationship.</span></div>`;
}

studioStage.addEventListener("click", event => {
  const answerButton = event.target.closest("[data-studio-answer]");
  const nextButton = event.target.closest("[data-studio-next]");
  if (nextButton) {
    if (studioIndex < studioDrills.length - 1) {
      studioIndex += 1;
      renderStudio();
    } else {
      studioStage.innerHTML = `
        <div class="studio-complete"><p class="section-number">Studio complete</p><strong>${studioScore}/${studioDrills.length}</strong><h3>Now change one variable.</h3><p>Take a correct answer, then switch the focus, aspect, pronoun, or respect level. Predict every part that has to change before checking the lessons above.</p><button type="button" class="button button-primary studio-next" data-studio-restart>Run the studio again</button></div>`;
    }
    return;
  }
  if (event.target.closest("[data-studio-restart]")) {
    studioIndex = 0;
    studioScore = 0;
    renderStudio();
    return;
  }
  if (!answerButton || studioAnswered) return;
  studioAnswered = true;
  const item = studioDrills[studioIndex];
  const selected = Number(answerButton.dataset.studioAnswer);
  const correct = selected === item.answer;
  if (correct) studioScore += 1;
  studioStage.querySelectorAll(".studio-option").forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add("correct");
    else if (index === selected) button.classList.add("incorrect");
  });
  studioStage.querySelector(".studio-feedback").innerHTML = `<strong>${correct ? "Tama — correct." : "Look again."}</strong><span>${item.explanation}</span><button type="button" class="button button-primary studio-next" data-studio-next>${studioIndex === studioDrills.length - 1 ? "See studio result" : "Next transformation"}</button>`;
});

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
renderStudio();
renderQuiz();
