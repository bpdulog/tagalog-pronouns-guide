const affixRoots = {
  kain: {
    label: "kain", gloss: "eat", description: "The root for eating branches into actor, object, location, and beneficiary-oriented forms.",
    paths: [
      { affix: "-um-", form: "kumain", meaning: "to eat; completed actor-focused action", focus: "Actor", pattern: "k + um + ain", sentence: "Kumain ako ng mangga.", translation: "I ate mango." },
      { affix: "-in", form: "kinain", meaning: "ate a particular thing; completed object-focused action", focus: "Object", pattern: "k + in + ain", sentence: "Kinain ko ang mangga.", translation: "I ate the mango." },
      { affix: "-in", form: "kainin", meaning: "to eat a particular thing", focus: "Object", pattern: "kain + in", sentence: "Kainin mo ang gulay.", translation: "Eat the vegetables." },
      { affix: "-an", form: "kainan", meaning: "an eating place; a place to eat", focus: "Location", pattern: "kain + an", sentence: "May kainan sa kanto.", translation: "There is an eatery on the corner." },
      { affix: "magpa-", form: "magpakain", meaning: "to feed someone", focus: "Actor / cause", pattern: "magpa + kain", sentence: "Magpakain tayo ng mga pusa.", translation: "Let’s feed the cats." }
    ]
  },
  sulat: {
    label: "sulat", gloss: "write", description: "This root shows how the same event can highlight the writer, a written thing, or the recipient.",
    paths: [
      { affix: "-um-", form: "sumulat", meaning: "to write; completed actor-focused action", focus: "Actor", pattern: "s + um + ulat", sentence: "Sumulat si Mia ng liham.", translation: "Mia wrote a letter." },
      { affix: "mag-", form: "magsulat", meaning: "to write; intentional or habitual activity", focus: "Actor", pattern: "mag + sulat", sentence: "Magsusulat ako bukas.", translation: "I will write tomorrow." },
      { affix: "-in", form: "sulatin", meaning: "to write a specific thing", focus: "Object", pattern: "sulat + in", sentence: "Isulat mo ang pangalan mo.", translation: "Write your name." },
      { affix: "i-", form: "isulat", meaning: "to write something down", focus: "Object / theme", pattern: "i + sulat", sentence: "Isinulat niya ang sagot.", translation: "She wrote down the answer." },
      { affix: "ipag-", form: "ipagsulat", meaning: "to write for someone", focus: "Beneficiary", pattern: "ipag + sulat", sentence: "Ipagsusulat kita ng liham.", translation: "I will write you a letter." }
    ]
  },
  luto: {
    label: "luto", gloss: "cook", description: "A useful root for comparing a general cooking activity with a meal, recipient, or cooking place.",
    paths: [
      { affix: "mag-", form: "magluto", meaning: "to cook; actor-focused activity", focus: "Actor", pattern: "mag + luto", sentence: "Nagluto si Carlo ng adobo.", translation: "Carlo cooked adobo." },
      { affix: "-in", form: "lutuin", meaning: "to cook a particular thing", focus: "Object", pattern: "luto + in", sentence: "Lutuin mo ang isda.", translation: "Cook the fish." },
      { affix: "-an", form: "lutuan", meaning: "to cook for/on/at", focus: "Location", pattern: "luto + an", sentence: "Lutuan mo ako ng itlog.", translation: "Cook me an egg." },
      { affix: "ipag-", form: "ipagluto", meaning: "to cook for someone", focus: "Beneficiary", pattern: "ipag + luto", sentence: "Ipinagluto ko si Lola ng sopas.", translation: "I cooked Lola some soup." },
      { affix: "i-", form: "iluto", meaning: "to cook something for a purpose", focus: "Object / theme", pattern: "i + luto", sentence: "Iluto mo ako ng pansit.", translation: "Cook me some pancit." }
    ]
  }
};

const confusionPairs = [
  { title: "po vs. ho", summary: "Both add respect. The word before them usually decides.", rule: "Use po after most words. Ho commonly follows words ending in a vowel, especially after ikaw, oo, and certain particles; usage varies by speaker and region.", examples: [["Salamat po.", "Thank you."], ["Oho, sige.", "Yes, okay."], ["Kumusta po kayo?", "How are you? (respectful)"], ["Ikaw ho ba si Ana?", "Are you Ana? (respectful)"]] },
  { title: "hindi vs. hindi naman", summary: "Hindi simply negates. Hindi naman softens, contrasts, or reassures.", rule: "Choose hindi for a plain no or not. Add naman when the speaker means ‘not really,’ ‘not exactly,’ or is gently pushing back against an expectation.", examples: [["Hindi ako pagod.", "I am not tired."], ["Hindi naman ako pagod.", "I’m not really tired / I’m not tired, though."], ["Hindi siya nasa bahay.", "He/she is not at home."], ["Hindi naman siya galit.", "He/she is not angry, really."]] },
  { title: "ng vs. nag-", summary: "One marks a noun phrase; the other is part of an actor-focus verb.", rule: "Ng introduces a non-focused object or possessor: bumili ng tinapay. Nag- attaches to a verb root: nagluto. They may sound close, but they do completely different work.", examples: [["Bumili ako ng tinapay.", "I bought bread."], ["Nagluto ako ng tinapay.", "I baked/cooked bread."], ["Libro ng guro ito.", "This is the teacher’s book."], ["Nag-aral siya kahapon.", "He/she studied yesterday."]] },
  { title: "sa vs. nasa", summary: "Sa points to a place or direction; nasa says where something is.", rule: "Use sa for ‘to, at, in’ when adding a location phrase. Use nasa as a predicate for location, often before a specific place: Nasa bangko ang pera.", examples: [["Pupunta ako sa bangko.", "I’m going to the bank."], ["Nasa bangko ang pera.", "The money is at the bank."], ["Kumain kami sa palengke.", "We ate at the market."], ["Nasa palengke si Tita.", "Auntie is at the market."]] },
  { title: "kasi vs. dahil", summary: "Both give a reason. Kasi is conversational; dahil is more formal or emphatic.", rule: "Kasi often comes after the main point in speech. Dahil can introduce a reason more formally and is common in writing. Both are useful—match the register and rhythm of the sentence.", examples: [["Uuwi na ako kasi gabi na.", "I’m going home because it’s late."], ["Dahil gabi na, uuwi na ako.", "Because it’s late, I’m going home."], ["Pagod siya kasi nagtrabaho siya.", "He/she is tired because they worked."], ["Hindi kami lumabas dahil umulan.", "We did not go out because it rained."]] }
];

const phrasebookScenarios = [
  { id: "market", icon: "◒", title: "At the palengke", intro: "Buy what you need, ask the price, and keep the exchange friendly.", phrases: [["Magkano po ito?", "How much is this?"], ["Pahingi po ng kalahating kilo.", "May I have half a kilo, please?"], ["Pwede pong bawasan?", "Could you lower the price a little?"], ["Sariwa po ba ito?", "Is this fresh?"], ["Salamat po.", "Thank you."]] },
  { id: "landlord", icon: "⌂", title: "With a landlord", intro: "Clear, polite lines for rent, repairs, and a first conversation.", phrases: [["Magandang araw po. Interesado po ako sa unit.", "Good day. I’m interested in the unit."], ["Magkano po ang upa bawat buwan?", "How much is the rent each month?"], ["Kasama na po ba ang tubig at kuryente?", "Are water and electricity included?"], ["May sira po ang gripo sa banyo.", "The bathroom faucet is broken."], ["Kailan po puwedeng ayusin?", "When can it be fixed?"]] },
  { id: "jeepney", icon: "▰", title: "In a jeepney", intro: "Navigate the ride with the phrases riders say every day.", phrases: [["Bayad po.", "Fare, please."], ["Isa po, papuntang Cubao.", "One fare, to Cubao."], ["Para po!", "Please stop!"], ["Makikiraan po.", "Excuse me, I’m getting through."], ["Sukli po.", "My change, please."]] },
  { id: "family", icon: "♡", title: "At a family gathering", intro: "Warm introductions and respectful language for meeting relatives.", phrases: [["Magandang hapon po.", "Good afternoon."], ["Ako po si Sam. Ikinagagalak ko po kayo makilala.", "I’m Sam. It’s nice to meet you."], ["Ang sarap po ng pagkain.", "The food is delicious."], ["Kumain na po ba kayo?", "Have you eaten?"], ["Salamat po sa pag-imbita.", "Thank you for inviting me."]] },
  { id: "bank", icon: "▤", title: "At the bank", intro: "Ask for help, explain a simple need, and confirm the next step.", phrases: [["Magandang umaga po. May itatanong lang po ako.", "Good morning. I just have a question."], ["Gusto ko pong magbukas ng account.", "I would like to open an account."], ["Ano pong mga kailangan kong dalhin?", "What do I need to bring?"], ["Saan po ako pipila?", "Where should I line up?"], ["Salamat po sa tulong ninyo.", "Thank you for your help."]] }
];

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "fil-PH";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

function wireAudio() {
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-audio-target], [data-speak]");
    if (!button) return;
    const text = button.dataset.speak || document.querySelector(`#${button.dataset.audioTarget}`)?.textContent;
    if (text) speak(text);
  });
}

function renderAffixTree() {
  const rootTabs = document.querySelector("#rootTabs");
  if (!rootTabs) return;
  let selectedRoot = "kain";
  let selectedPath = 0;
  const render = () => {
    const root = affixRoots[selectedRoot];
    rootTabs.innerHTML = Object.entries(affixRoots).map(([id, data]) => `<button type="button" role="tab" aria-selected="${id === selectedRoot}" class="root-tab ${id === selectedRoot ? "active" : ""}" data-root="${id}"><strong>${data.label}</strong><span>${data.gloss}</span></button>`).join("");
    document.querySelector("#treeRoot").innerHTML = `<span>ROOT</span><strong>${root.label}</strong><small>${root.gloss}</small><p>${root.description}</p>`;
    document.querySelector("#treeBranches").innerHTML = root.paths.map((path, index) => `<button class="tree-branch ${index === selectedPath ? "active" : ""}" type="button" role="listitem" aria-pressed="${index === selectedPath}" data-path="${index}"><span class="branch-line" aria-hidden="true"></span><small>${path.focus} route</small><strong>${path.affix}</strong><em>${path.form}</em></button>`).join("");
    const path = root.paths[selectedPath];
    document.querySelector("#affixBadge").textContent = path.affix;
    document.querySelector("#affixForm").textContent = path.form;
    document.querySelector("#affixMeaning").textContent = path.meaning;
    document.querySelector("#affixFocus").textContent = path.focus;
    document.querySelector("#affixPattern").textContent = path.pattern;
    document.querySelector("#affixSentence").textContent = path.sentence;
    document.querySelector("#affixTranslation").textContent = path.translation;
  };
  rootTabs.addEventListener("click", event => { const button = event.target.closest("[data-root]"); if (!button) return; selectedRoot = button.dataset.root; selectedPath = 0; render(); });
  document.querySelector("#treeBranches").addEventListener("click", event => { const button = event.target.closest("[data-path]"); if (!button) return; selectedPath = Number(button.dataset.path); render(); });
  render();
}

function renderPairs() {
  const tabs = document.querySelector("#pairTabs");
  if (!tabs) return;
  let selected = 0;
  const render = () => {
    const pair = confusionPairs[selected];
    tabs.innerHTML = confusionPairs.map((item, index) => `<button class="pair-tab ${index === selected ? "active" : ""}" type="button" role="tab" aria-selected="${index === selected}" data-pair="${index}">${item.title}</button>`).join("");
    document.querySelector("#pairDetail").innerHTML = `<p class="section-number">The difference</p><h2>${pair.title}</h2><p class="pair-summary">${pair.summary}</p><div class="pair-rule"><strong>The shortcut</strong><p>${pair.rule}</p></div><div class="pair-examples">${pair.examples.map(([fil, en]) => `<article><p lang="fil">${fil}</p><span>${en}</span><button class="audio-button" type="button" data-speak="${fil}"><span aria-hidden="true">◖</span> Hear it</button></article>`).join("")}</div>`;
  };
  tabs.addEventListener("click", event => { const button = event.target.closest("[data-pair]"); if (!button) return; selected = Number(button.dataset.pair); render(); });
  render();
}

function renderPhrasebook() {
  const tabs = document.querySelector("#scenarioTabs");
  if (!tabs) return;
  let selected = 0;
  const render = () => {
    const scenario = phrasebookScenarios[selected];
    tabs.innerHTML = phrasebookScenarios.map((item, index) => `<button class="scenario-tab ${index === selected ? "active" : ""}" type="button" role="tab" aria-selected="${index === selected}" data-scenario="${index}"><span aria-hidden="true">${item.icon}</span>${item.title}</button>`).join("");
    document.querySelector("#scenarioLabel").textContent = `Situation ${selected + 1} of ${phrasebookScenarios.length}`;
    document.querySelector("#scenarioTitle").textContent = scenario.title;
    document.querySelector("#scenarioIntro").textContent = scenario.intro;
    document.querySelector("#phraseList").innerHTML = scenario.phrases.map(([fil, en], index) => `<article class="phrase-card"><span class="phrase-number">${String(index + 1).padStart(2, "0")}</span><div><p lang="fil">${fil}</p><small>${en}</small></div><button class="audio-button" type="button" data-speak="${fil}" aria-label="Hear: ${fil}"><span aria-hidden="true">◖</span> Hear it</button></article>`).join("");
  };
  tabs.addEventListener("click", event => { const button = event.target.closest("[data-scenario]"); if (!button) return; selected = Number(button.dataset.scenario); render(); });
  render();
}

wireAudio();
renderAffixTree();
renderPairs();
renderPhrasebook();
