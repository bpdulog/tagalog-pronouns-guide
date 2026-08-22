const cases = [
  {
    id: "nominative",
    name: "Nominative",
    polish: "mianownik",
    question: "kto? co?",
    role: "subject, dictionary form, naming",
    triggers: "subjects, predicate nouns after to",
    example: "Student czyta. - The student is reading.",
    cards: [
      ["Main job", "Names the subject", "Kto czyta? Student czyta."],
      ["Good starter form", "dictionary form", "dobra kawa, dobry film, dobre miasto"],
      ["Watch for", "predicate nouns with to", "To jest mój brat."]
    ]
  },
  {
    id: "genitive",
    name: "Genitive",
    polish: "dopełniacz",
    question: "kogo? czego?",
    role: "of, from, absence, quantity, negated objects",
    triggers: "nie ma, dużo/mało, possession, many prepositions, negation",
    example: "Nie widzę studenta. - I do not see the student.",
    cards: [
      ["Main job", "Marks absence and 'of'", "Nie ma kawy. Kubek Anny."],
      ["Common trigger", "negated direct object", "Mam książkę -> Nie mam książki."],
      ["Starter endings", "-a for many masculine animate nouns; -y/-i for many feminine nouns", "student -> studenta, kawa -> kawy"]
    ]
  },
  {
    id: "dative",
    name: "Dative",
    polish: "celownik",
    question: "komu? czemu?",
    role: "to/for a recipient, experiencer",
    triggers: "dawać, pomagać, mówić, podoba się",
    example: "Pomagam studentowi. - I am helping the student.",
    cards: [
      ["Main job", "Marks the receiver or beneficiary", "Daję Annie kawę."],
      ["Useful pattern", "something is pleasing to someone", "Podoba mi się ten film."],
      ["Starter endings", "-owi for many masculine nouns; -ie/-y for many feminine nouns", "studentowi, Annie"]
    ]
  },
  {
    id: "accusative",
    name: "Accusative",
    polish: "biernik",
    question: "kogo? co?",
    role: "direct object, destination after some prepositions",
    triggers: "widzieć, mieć, lubić, czytać; motion into/onto with w/na",
    example: "Widzę studenta. - I see the student.",
    cards: [
      ["Main job", "Marks many direct objects", "Czytam książkę."],
      ["Motion contrast", "destination with w/na", "Idę do parku. Idę na pocztę."],
      ["Starter endings", "feminine -a often becomes -ę; masculine animate often looks genitive", "kawę, studenta"]
    ]
  },
  {
    id: "instrumental",
    name: "Instrumental",
    polish: "narzędnik",
    question: "kim? czym?",
    role: "with/by means of, companion, profession after być",
    triggers: "z + person/thing, być + profession, tools",
    example: "Piszę długopisem. - I write with a pen.",
    cards: [
      ["Main job", "Marks tool or companion", "Jadę z kolegą."],
      ["Identity pattern", "profession after być", "Jestem studentem."],
      ["Starter endings", "-em for many masculine/neuter nouns; -ą for many feminine nouns", "studentem, kawą"]
    ]
  },
  {
    id: "locative",
    name: "Locative",
    polish: "miejscownik",
    question: "o kim? o czym?",
    role: "location or topic after specific prepositions",
    triggers: "w, na, o, po, przy after static/location meanings",
    example: "Mieszkam w Krakowie. - I live in Krakow.",
    cards: [
      ["Main job", "Appears only after certain prepositions", "Rozmawiam o filmie."],
      ["Location contrast", "place with w/na", "Jestem w domu. Książka leży na stole."],
      ["Starter endings", "-ie or -u are common, with stem changes", "Krakowie, domu, filmie"]
    ]
  },
  {
    id: "vocative",
    name: "Vocative",
    polish: "wołacz",
    question: "o!",
    role: "direct address",
    triggers: "calling, greeting, letters, emphatic address",
    example: "Panie profesorze! - Professor!",
    cards: [
      ["Main job", "Addresses someone directly", "Anno, chodź tutaj."],
      ["Everyday note", "first names often use nominative in casual speech", "Ania! vs Aniu!"],
      ["Starter endings", "masculine often -e/-u; feminine often -o/-u", "bracie, Marku, Anno, Aniu"]
    ]
  }
];

const triggers = [
  {
    id: "negation",
    label: "Negation",
    title: "Nie often pulls direct objects into genitive",
    example: "Mam książkę. -> Nie mam książki.",
    explanation: "A direct object that would be accusative in an affirmative sentence commonly becomes genitive after negation."
  },
  {
    id: "motion",
    label: "Motion vs place",
    title: "Some prepositions switch case by meaning",
    example: "Jestem w szkole. -> Idę do szkoły.",
    explanation: "Static location often uses locative after w or na. Direction can use accusative with w/na, or genitive after do."
  },
  {
    id: "recipient",
    label: "Recipient",
    title: "Receivers and experiencers often use dative",
    example: "Daję mamie prezent. Podoba mi się kawa.",
    explanation: "The person receiving, benefiting, or experiencing something often appears in dative."
  },
  {
    id: "tool",
    label: "Tool or companion",
    title: "Tools and companions use instrumental",
    example: "Piszę długopisem. Idę z kolegą.",
    explanation: "Instrumental marks the means of an action and appears after z when z means with."
  }
];

const studioDrills = [
  { tag: "Direct object", prompt: "Say: I see a student.", context: "The student is a masculine personal direct object.", options: ["Widzę student.", "Widzę studenta.", "Widzę studentowi."], answer: 1, explanation: "Widzieć takes a direct object. Masculine personal accusative often looks like genitive: studenta." },
  { tag: "Negation", prompt: "Say: I do not have coffee.", context: "Negated possession uses genitive.", options: ["Nie mam kawa.", "Nie mam kawę.", "Nie mam kawy."], answer: 2, explanation: "Mam kawę becomes Nie mam kawy after negation." },
  { tag: "Dative", prompt: "Say: I am helping Anna.", context: "Pomagać takes dative.", options: ["Pomagam Annie.", "Pomagam Annę.", "Pomagam Anny."], answer: 0, explanation: "The helper is subject; the person helped is dative: Annie." },
  { tag: "Instrumental", prompt: "Say: I am a student.", context: "A profession or role after jestem uses instrumental.", options: ["Jestem student.", "Jestem studentem.", "Jestem studenta."], answer: 1, explanation: "After być, a profession or social role commonly uses instrumental: studentem." },
  { tag: "Locative", prompt: "Say: I am talking about a film.", context: "O meaning about takes locative.", options: ["Rozmawiam o film.", "Rozmawiam o filmie.", "Rozmawiam o filmu."], answer: 1, explanation: "The preposition o requires locative here: o filmie." },
  { tag: "Accusative feminine", prompt: "Say: I drink coffee.", context: "Kawa is feminine; accusative often ends in -ę.", options: ["Piję kawa.", "Piję kawę.", "Piję kawy."], answer: 1, explanation: "A feminine -a noun often changes to -ę in accusative: kawę." },
  { tag: "Genitive quantity", prompt: "Say: a lot of work.", context: "Quantity words often take genitive.", options: ["dużo praca", "dużo pracę", "dużo pracy"], answer: 2, explanation: "Dużo takes genitive: dużo pracy." },
  { tag: "Motion", prompt: "Say: I am going to the post office.", context: "Na + accusative is common for this destination.", options: ["Idę na pocztę.", "Idę na poczcie.", "Idę pocztą."], answer: 0, explanation: "Destination after na uses accusative: na pocztę." },
  { tag: "Vocative", prompt: "Address a professor directly.", context: "Formal titles often use vocative.", options: ["Panie profesorze!", "Pan profesor!", "Pana profesora!"], answer: 0, explanation: "Direct address uses vocative: Panie profesorze." },
  { tag: "Aspect", prompt: "Say: I will read the book through.", context: "Choose a perfective future outcome.", options: ["Czytam książkę.", "Przeczytam książkę.", "Czytałem książkę."], answer: 1, explanation: "Przeczytam presents a completed future result." }
];

const quiz = [
  { question: "Which case names the subject of a sentence?", context: "Kto czyta? Student czyta.", options: ["nominative", "genitive", "instrumental"], answer: 0, explanation: "The nominative names the subject or dictionary form." },
  { question: "Which case is common after nie mam?", context: "Nie mam ___.", options: ["genitive", "dative", "vocative"], answer: 0, explanation: "Absence and negated possession commonly use genitive." },
  { question: "Which form fits: Widzę ___?", context: "Masculine personal direct object: student.", options: ["student", "studenta", "studentowi"], answer: 1, explanation: "Masculine personal accusative often matches genitive: studenta." },
  { question: "Which case answers komu? czemu?", context: "Think receiver or experiencer.", options: ["dative", "locative", "accusative"], answer: 0, explanation: "Dative answers komu? czemu?" },
  { question: "Which sentence means I am a teacher?", context: "Profession after jestem.", options: ["Jestem nauczyciel.", "Jestem nauczycielem.", "Jestem nauczyciela."], answer: 1, explanation: "A profession after być uses instrumental." },
  { question: "Which case appears after o in Rozmawiam o filmie?", context: "The preposition means about.", options: ["locative", "accusative", "vocative"], answer: 0, explanation: "O meaning about takes locative." },
  { question: "Which phrase means with Anna?", context: "Z meaning with.", options: ["z Anna", "z Anny", "z Anną"], answer: 2, explanation: "Z meaning with takes instrumental; Anna becomes Anną." },
  { question: "Which case is used for direct address?", context: "Panie doktorze!", options: ["vocative", "genitive", "dative"], answer: 0, explanation: "Vocative is the address case." },
  { question: "Which is the negated version of Mam kawę?", context: "Negated direct object.", options: ["Nie mam kawę.", "Nie mam kawy.", "Nie mam kawa."], answer: 1, explanation: "The object shifts to genitive: kawy." },
  { question: "Which case answers kim? czym?", context: "Tool or companion.", options: ["instrumental", "accusative", "nominative"], answer: 0, explanation: "Instrumental answers kim? czym?" },
  { question: "Which phrase marks a destination?", context: "Going to the post office.", options: ["na poczcie", "na pocztę", "poczta"], answer: 1, explanation: "Na + accusative marks many destinations: na pocztę." },
  { question: "Which phrase marks a static place?", context: "At the post office.", options: ["na poczcie", "na pocztę", "poczty"], answer: 0, explanation: "Static location with na uses locative: na poczcie." },
  { question: "Which word is perfective future?", context: "I will do it as a completed result.", options: ["robię", "zrobię", "robiłem"], answer: 1, explanation: "Zrobię is perfective future." },
  { question: "Which noun is likely feminine?", context: "Starter gender pattern.", options: ["kawa", "film", "miasto"], answer: 0, explanation: "Many nouns ending in -a are feminine." },
  { question: "Which noun is likely neuter?", context: "Starter gender pattern.", options: ["student", "kawa", "miasto"], answer: 2, explanation: "Many nouns ending in -o are neuter." },
  { question: "Which phrase means a lot of coffee?", context: "Quantity word dużo.", options: ["dużo kawa", "dużo kawy", "dużo kawę"], answer: 1, explanation: "Dużo takes genitive: kawy." },
  { question: "Which case is most tied to prepositions like w, na, o, po, przy?", context: "When they express static location or topic.", options: ["locative", "vocative", "nominative"], answer: 0, explanation: "Locative appears only after prepositions." },
  { question: "Which is the direct object in Ala czyta książkę?", context: "What is Ala reading?", options: ["Ala", "czyta", "książkę"], answer: 2, explanation: "Książkę is the accusative direct object." },
  { question: "Which case often marks possession like kubek Anny?", context: "Anna's cup.", options: ["genitive", "dative", "instrumental"], answer: 0, explanation: "Possession is a common genitive use." },
  { question: "Why can Polish move words more freely than English?", context: "Książkę czyta Ala still shows roles.", options: ["Case endings mark roles", "Polish has no subjects", "Verbs never change"], answer: 0, explanation: "Case endings help identify grammatical roles even when order changes." }
];

let selectedCase = cases[0];
let selectedTrigger = triggers[0];
let studioIndex = 0;
let quizIndex = 0;
let quizScore = 0;

function createChoice({ label, sub, selected, onClick }) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `choice-card${selected ? " is-selected" : ""}`;
  button.setAttribute("role", "radio");
  button.setAttribute("aria-checked", selected ? "true" : "false");
  button.innerHTML = `<strong>${label}</strong><small>${sub}</small>`;
  button.addEventListener("click", onClick);
  return button;
}

function handleRadioKeys(container, buttons) {
  container.addEventListener("keydown", (event) => {
    const current = buttons.indexOf(document.activeElement);
    if (current === -1) return;
    let next = current;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (current + 1) % buttons.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (current - 1 + buttons.length) % buttons.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = buttons.length - 1;
    if (next !== current) {
      event.preventDefault();
      buttons[next].focus();
      buttons[next].click();
    }
  });
}

function renderCases() {
  const choices = document.querySelector("#caseChoices");
  choices.innerHTML = "";
  const buttons = cases.map((item) => {
    const button = createChoice({
      label: item.name,
      sub: item.question,
      selected: item.id === selectedCase.id,
      onClick: () => {
        selectedCase = item;
        renderCases();
      }
    });
    choices.appendChild(button);
    return button;
  });
  handleRadioKeys(choices, buttons);

  document.querySelector("#caseName").textContent = `${selectedCase.name} (${selectedCase.polish})`;
  document.querySelector("#caseQuestion").textContent = selectedCase.question;
  document.querySelector("#caseCards").innerHTML = selectedCase.cards.map(([title, value, example]) => `
    <article>
      <span>${title}</span>
      <strong>${value}</strong>
      <p>${example}</p>
    </article>
  `).join("");

  document.querySelector("#caseTable").innerHTML = cases.map((item) => `
    <tr>
      <th scope="row">${item.name}<small>${item.polish}</small></th>
      <td>${item.question}</td>
      <td>${item.role}</td>
      <td>${item.example}</td>
    </tr>
  `).join("");
}

function renderTriggers() {
  const choices = document.querySelector("#triggerChoices");
  choices.innerHTML = "";
  const buttons = triggers.map((item) => {
    const button = createChoice({
      label: item.label,
      sub: item.id,
      selected: item.id === selectedTrigger.id,
      onClick: () => {
        selectedTrigger = item;
        renderTriggers();
      }
    });
    choices.appendChild(button);
    return button;
  });
  handleRadioKeys(choices, buttons);

  document.querySelector("#triggerCard").innerHTML = `
    <span class="usage-label">${selectedTrigger.label}</span>
    <h3>${selectedTrigger.title}</h3>
    <code>${selectedTrigger.example}</code>
    <p>${selectedTrigger.explanation}</p>
  `;
}

function renderMultipleChoice({ items, index, optionRoot, feedbackRoot, onAnswer }) {
  const item = items[index];
  const root = document.querySelector(optionRoot);
  const feedback = document.querySelector(feedbackRoot);
  root.innerHTML = "";
  feedback.textContent = "";
  item.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-choice";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", "false");
    button.textContent = option;
    button.addEventListener("click", () => {
      [...root.children].forEach((child) => {
        child.disabled = true;
        child.setAttribute("aria-checked", "false");
      });
      button.setAttribute("aria-checked", "true");
      button.classList.add(optionIndex === item.answer ? "is-correct" : "is-wrong");
      root.children[item.answer].classList.add("is-correct");
      feedback.textContent = `${optionIndex === item.answer ? "Correct." : "Not quite."} ${item.explanation}`;
      onAnswer(optionIndex === item.answer);
    });
    root.appendChild(button);
  });
}

function renderStudio() {
  const item = studioDrills[studioIndex];
  document.querySelector("#studioTag").textContent = item.tag;
  document.querySelector("#studioCount").textContent = `${studioIndex + 1} of ${studioDrills.length}`;
  document.querySelector("#studioPrompt").textContent = item.prompt;
  document.querySelector("#studioContext").textContent = item.context;
  renderMultipleChoice({
    items: studioDrills,
    index: studioIndex,
    optionRoot: "#studioOptions",
    feedbackRoot: "#studioFeedback",
    onAnswer: () => {}
  });
}

function renderQuiz() {
  const item = quiz[quizIndex];
  document.querySelector("#quizStage").textContent = `Question ${quizIndex + 1} of ${quiz.length}`;
  document.querySelector("#quizScore").textContent = `Score ${quizScore}`;
  document.querySelector("#quizQuestion").textContent = item.question;
  document.querySelector("#quizContext").textContent = item.context;
  let answered = false;
  renderMultipleChoice({
    items: quiz,
    index: quizIndex,
    optionRoot: "#quizOptions",
    feedbackRoot: "#quizFeedback",
    onAnswer: (correct) => {
      if (!answered && correct) quizScore += 1;
      answered = true;
      document.querySelector("#quizScore").textContent = `Score ${quizScore}`;
    }
  });
}

document.querySelector("#nextStudio").addEventListener("click", () => {
  studioIndex = (studioIndex + 1) % studioDrills.length;
  renderStudio();
});

document.querySelector("#nextQuiz").addEventListener("click", () => {
  quizIndex = (quizIndex + 1) % quiz.length;
  if (quizIndex === 0) quizScore = 0;
  renderQuiz();
});

renderCases();
renderTriggers();
renderStudio();
renderQuiz();
