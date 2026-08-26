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

function phraseSet(core, terms, templates) {
  return [...core, ...terms.flatMap(([item, meaning]) => templates.map(([fil, en]) => [fil.replaceAll("{item}", item), en.replaceAll("{item}", meaning)]))].slice(0, 50);
}

const phrasebookScenarios = [
  { id: "market", icon: "◒", title: "At the palengke", intro: "Buy what you need, ask the price, and keep the exchange friendly.",
    phrases: phraseSet([["Magkano po ito?", "How much is this?"], ["Pahingi po ng kalahating kilo.", "May I have half a kilo, please?"], ["Puwede pong bawasan?", "Could you lower the price a little?"], ["Sariwa po ba ito?", "Is this fresh?"], ["May sukli po ba kayo?", "Do you have change?"], ["Pakisukat po ito.", "Please weigh this."], ["Ito na lang po.", "I’ll take this one instead."], ["Pakiabot po ng supot.", "Please pass me a bag."], ["Hindi na po, salamat.", "No more, thank you."], ["Babalik po ako mamaya.", "I’ll come back later."]], [["kamatis", "tomatoes"], ["mangga", "mangoes"], ["isda", "fish"], ["itlog", "eggs"], ["manok", "chicken"], ["kanin", "rice"], ["sibuyas", "onions"], ["bawang", "garlic"]], [["May {item} po ba?", "Do you have {item}?"], ["Magkano po ang {item}?", "How much are the {item}?"], ["Pahingi po ng {item}.", "May I have {item}, please?"], ["Puwede pong makita ang {item}?", "May I see the {item}?"], ["Pakidagdag po ang {item}.", "Please add the {item}."]]) },
  { id: "landlord", icon: "⌂", title: "With a landlord", intro: "Clear, polite lines for rent, repairs, and a first conversation.",
    phrases: phraseSet([["Magandang araw po. Interesado po ako sa unit.", "Good day. I’m interested in the unit."], ["Magkano po ang upa bawat buwan?", "How much is the rent each month?"], ["Kasama na po ba ang tubig at kuryente?", "Are water and electricity included?"], ["May sira po ang gripo sa banyo.", "The bathroom faucet is broken."], ["Kailan po puwedeng ayusin?", "When can it be fixed?"], ["Puwede ko po bang makita ang kontrata?", "May I see the contract?"], ["Kailan po ang bayad sa upa?", "When is rent due?"], ["May deposito po ba?", "Is there a deposit?"], ["Puwede po bang mag-alaga ng hayop?", "May I keep a pet?"], ["Pakisabi po kung may kailangan pa.", "Please tell me if anything else is needed."]], [["parking", "parking"], ["internet", "internet"], ["aircon", "air conditioning"], ["ref", "a refrigerator"], ["seguridad", "security"], ["tubig", "water"], ["kuryente", "electricity"], ["basurahan", "a trash bin"]], [["May {item} po ba sa unit?", "Is there {item} in the unit?"], ["Kasama na po ba ang {item}?", "Is {item} included?"], ["Puwede po bang gamitin ang {item}?", "May I use the {item}?"], ["May problema po sa {item}.", "There is a problem with the {item}."], ["Puwede po bang tingnan ang {item}?", "Could you check the {item}?"]]) },
  { id: "jeepney", icon: "▰", title: "In a jeepney", intro: "Navigate the ride with the phrases riders say every day.",
    phrases: phraseSet([["Bayad po.", "Fare, please."], ["Isa po, papuntang Cubao.", "One fare, to Cubao."], ["Para po!", "Please stop!"], ["Makikiraan po.", "Excuse me, I’m getting through."], ["Sukli po.", "My change, please."], ["Pakiabot po ng bayad.", "Please pass the fare."], ["Dito na lang po.", "Here is fine."], ["May bababa po.", "Someone is getting off."], ["Kasya pa po ba?", "Is there still room?"], ["Pakiusog po nang kaunti.", "Please move over a little."]], [["Cubao", "Cubao"], ["Quiapo", "Quiapo"], ["Makati", "Makati"], ["terminal", "the terminal"], ["susunod na kanto", "the next corner"], ["palengke", "the market"], ["istasyon", "the station"], ["paaralan", "the school"]], [["Papunta po ba sa {item}?", "Does this go to {item}?"], ["Dadaan po ba sa {item}?", "Does this pass through {item}?"], ["Saan po ang babaan sa {item}?", "Where do I get off for {item}?"], ["Sabihan n’yo po ako pag nasa {item} na.", "Please tell me when we are at {item}."], ["Malayo pa po ba ang {item}?", "Is {item} still far?"]]) },
  { id: "family", icon: "♡", title: "At a family gathering", intro: "Warm introductions and respectful language for meeting relatives.",
    phrases: phraseSet([["Magandang hapon po.", "Good afternoon."], ["Ako po si Sam. Ikinagagalak ko po kayo makilala.", "I’m Sam. It’s nice to meet you."], ["Ang sarap po ng pagkain.", "The food is delicious."], ["Kumain na po ba kayo?", "Have you eaten?"], ["Salamat po sa pag-imbita.", "Thank you for inviting me."], ["Tulungan ko po kayo.", "Let me help you."], ["Saan po ako uupo?", "Where should I sit?"], ["Kukuha lang po ako ng tubig.", "I’ll just get some water."], ["Ang saya po rito.", "It’s so nice here."], ["Ingat po sa pag-uwi.", "Take care going home."]], [["lola", "Grandma"], ["lolo", "Grandpa"], ["Tita", "Auntie"], ["Tito", "Uncle"], ["pinsan", "a cousin"], ["anak", "the child"], ["pagkain", "the food"], ["litrato", "a photo"]], [["Nasaan po si {item}?", "Where is {item}?"], ["Puwede ko po bang batiin si {item}?", "May I greet {item}?"], ["Kumusta na po si {item}?", "How is {item}?"], ["Puwede ko po bang makita si {item}?", "May I see {item}?"], ["Salamat po kay {item}.", "Thank {item} for me."]]) },
  { id: "bank", icon: "▤", title: "At the bank", intro: "Ask for help, explain a simple need, and confirm the next step.",
    phrases: phraseSet([["Magandang umaga po. May itatanong lang po ako.", "Good morning. I just have a question."], ["Gusto ko pong magbukas ng account.", "I would like to open an account."], ["Ano pong mga kailangan kong dalhin?", "What do I need to bring?"], ["Saan po ako pipila?", "Where should I line up?"], ["Salamat po sa tulong ninyo.", "Thank you for your help."], ["May appointment po ako.", "I have an appointment."], ["Puwede po ba akong kumuha ng numero?", "May I get a number?"], ["Pakiulit po, hindi ko narinig.", "Please repeat that; I did not hear."], ["Gaano po katagal ang proseso?", "How long does the process take?"], ["May bayad po ba?", "Is there a fee?"]], [["withdrawal", "a withdrawal"], ["deposito", "a deposit"], ["transfer", "a transfer"], ["ATM card", "an ATM card"], ["resibo", "a receipt"], ["account number", "an account number"], ["passbook", "a passbook"], ["ID", "an ID"]], [["Kailangan ko pong gumawa ng {item}.", "I need to make {item}."], ["Saan po ang para sa {item}?", "Where is the counter for {item}?"], ["Puwede po ba ang {item} rito?", "Can I do {item} here?"], ["May kailangan po ba para sa {item}?", "What is needed for {item}?"], ["Paki-check po ang {item} ko.", "Please check my {item}."]]) },
  { id: "restaurant", icon: "◉", title: "At a restaurant", intro: "Order, ask about ingredients, and handle the bill with ease.",
    phrases: phraseSet([["Mesa para sa dalawa, please.", "A table for two, please."], ["Puwede po bang makita ang menu?", "May I see the menu?"], ["Oorder na po kami.", "We are ready to order."], ["Ano po ang mairerekomenda ninyo?", "What do you recommend?"], ["Wala po akong allergy.", "I do not have any allergies."], ["Puwede pong hindi maanghang?", "Could it be not spicy?"], ["Paki-pack na lang po.", "Please pack it to go."], ["Pakiabot po ang tubig.", "Please pass the water."], ["Paki-check po ang bill.", "The bill, please."], ["Masarap po ang pagkain.", "The food is delicious."]], [["adobo", "adobo"], ["sinigang", "sinigang"], ["pancit", "pancit"], ["kanin", "rice"], ["tubig", "water"], ["kape", "coffee"], ["juice", "juice"], ["dessert", "dessert"]], [["May {item} po ba?", "Do you have {item}?"], ["Pahingi po ng {item}.", "May I have {item}, please?"], ["Magkano po ang {item}?", "How much is the {item}?"], ["Puwede pong dagdagan ng {item}?", "Could you add {item}?"], ["Paki-pack po ang {item}.", "Please pack the {item} to go."]]) },
  { id: "clinic", icon: "✚", title: "At a clinic or pharmacy", intro: "Explain a basic symptom, ask for medicine, and understand the next step.",
    phrases: phraseSet([["Masama po ang pakiramdam ko.", "I do not feel well."], ["Masakit po ang ulo ko.", "My head hurts."], ["May lagnat po ako.", "I have a fever."], ["May allergy po ako sa gamot na ito.", "I am allergic to this medicine."], ["Kailangan ko po ng doktor.", "I need a doctor."], ["May appointment po ako.", "I have an appointment."], ["Kailan po ako tatawagin?", "When will I be called?"], ["Pakiusap, dahan-dahan lang po.", "Please, slowly."], ["Paano po ito inumin?", "How do I take this?"], ["Kailangan ko po ng reseta.", "I need a prescription."]], [["gamot sa ubo", "cough medicine"], ["gamot sa sipon", "cold medicine"], ["pain reliever", "a pain reliever"], ["thermometer", "a thermometer"], ["bandage", "a bandage"], ["vitamins", "vitamins"], ["mask", "a mask"], ["alcohol", "rubbing alcohol"]], [["May {item} po ba?", "Do you have {item}?"], ["Kailangan ko po ng {item}.", "I need {item}."], ["Magkano po ang {item}?", "How much is the {item}?"], ["Paano po gamitin ang {item}?", "How do I use {item}?"], ["Puwede po bang bumili ng {item} rito?", "Can I buy {item} here?"]]) },
  { id: "ride", icon: "↗", title: "In a taxi or ride-hail", intro: "Confirm the trip, give a clear destination, and travel more comfortably.",
    phrases: phraseSet([["May booking po ako.", "I have a booking."], ["Ako po si Sam.", "I’m Sam."], ["Papunta po ako sa address na ito.", "I’m going to this address."], ["Dito na lang po ako bababa.", "I’ll get off here."], ["Puwede pong dahan-dahan lang?", "Could you go slowly?"], ["Puwede po bang maghintay ng limang minuto?", "Could you wait five minutes?"], ["Mainit po ba sa loob?", "Is it warm inside?"], ["Puwede pong buksan ang aircon?", "Could you turn on the air conditioning?"], ["Magkano po ang pamasahe?", "How much is the fare?"], ["Salamat po, ingat po.", "Thank you, take care."]], [["hotel", "the hotel"], ["airport", "the airport"], ["istasyon", "the station"], ["opisina", "the office"], ["bahay", "home"], ["mall", "the mall"], ["klinika", "the clinic"], ["terminal", "the terminal"]], [["Papunta po ako sa {item}.", "I am going to {item}."], ["Alam n’yo po ba ang daan papuntang {item}?", "Do you know the way to {item}?"], ["Malapit na po ba ang {item}?", "Is {item} nearby?"], ["Puwede po bang dumaan sa {item}?", "Could we pass by {item}?"], ["Pakibaba po ako sa {item}.", "Please drop me off at {item}."]]) },
  { id: "directions", icon: "⌁", title: "Asking for directions", intro: "Find your way without needing to translate every word in your head.",
    phrases: phraseSet([["Saan po ang banyo?", "Where is the bathroom?"], ["Naliligaw po ako.", "I am lost."], ["Puwede po bang magtanong?", "May I ask a question?"], ["Paano po pumunta roon?", "How do I get there?"], ["Malapit lang po ba?", "Is it nearby?"], ["Lalakad lang po ba ako?", "Should I just walk?"], ["Kaliwa o kanan po?", "Left or right?"], ["May landmark po ba?", "Is there a landmark?"], ["Salamat po sa direksiyon.", "Thank you for the directions."], ["Naiintindihan ko na po.", "I understand now."]], [["bangko", "the bank"], ["palengke", "the market"], ["istasyon", "the station"], ["mall", "the mall"], ["paaralan", "the school"], ["ospital", "the hospital"], ["terminal", "the terminal"], ["hotel", "the hotel"]], [["Saan po ang {item}?", "Where is {item}?"], ["Paano po pumunta sa {item}?", "How do I get to {item}?"], ["Malayo po ba ang {item}?", "Is {item} far?"], ["Dadaan po ba ako sa {item}?", "Will I pass by {item}?"], ["Ito na po ba ang daan papuntang {item}?", "Is this the way to {item}?"]]) },
  { id: "work", icon: "□", title: "At work or school", intro: "Introduce yourself, ask for help, and keep everyday tasks moving.",
    phrases: phraseSet([["Magandang umaga po.", "Good morning."], ["Bago po ako rito.", "I am new here."], ["Puwede po bang magtanong?", "May I ask a question?"], ["Pakiulit po nang dahan-dahan.", "Please repeat it slowly."], ["Hindi ko pa po naiintindihan.", "I do not understand yet."], ["Puwede po ba akong tumulong?", "May I help?"], ["Natapos ko na po.", "I have finished."], ["Kailan po ang deadline?", "When is the deadline?"], ["May meeting po ba mamaya?", "Is there a meeting later?"], ["Salamat po sa paliwanag.", "Thank you for the explanation."]], [["meeting", "the meeting"], ["assignment", "the assignment"], ["report", "the report"], ["email", "the email"], ["computer", "the computer"], ["printer", "the printer"], ["schedule", "the schedule"], ["ID", "an ID"]], [["Saan po ang {item}?", "Where is {item}?"], ["Kailangan ko po ng {item}.", "I need {item}."], ["Puwede po bang gamitin ang {item}?", "May I use {item}?"], ["Paki-check po ang {item} ko.", "Please check my {item}."], ["May problema po sa {item}.", "There is a problem with the {item}."]]) }
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
  const search = document.querySelector("#phraseSearch");
  const render = () => {
    const scenario = phrasebookScenarios[selected];
    const query = search.value.trim().toLocaleLowerCase();
    const visiblePhrases = scenario.phrases.filter(([fil, en]) => `${fil} ${en}`.toLocaleLowerCase().includes(query));
    tabs.innerHTML = phrasebookScenarios.map((item, index) => `<button class="scenario-tab ${index === selected ? "active" : ""}" type="button" role="tab" aria-selected="${index === selected}" data-scenario="${index}"><span aria-hidden="true">${item.icon}</span>${item.title}</button>`).join("");
    document.querySelector("#scenarioLabel").textContent = `Situation ${selected + 1} of ${phrasebookScenarios.length} · 50 phrases`;
    document.querySelector("#scenarioTitle").textContent = scenario.title;
    document.querySelector("#scenarioIntro").textContent = scenario.intro;
    document.querySelector("#phraseCount").textContent = query ? `${visiblePhrases.length} of 50 phrases match “${search.value.trim()}”.` : "50 phrases in this situation.";
    document.querySelector("#phraseList").innerHTML = visiblePhrases.length
      ? visiblePhrases.map(([fil, en], index) => `<article class="phrase-card"><span class="phrase-number">${String(index + 1).padStart(2, "0")}</span><div><p lang="fil">${fil}</p><small>${en}</small></div></article>`).join("")
      : `<p class="empty-phrases">No matching phrase yet. Try a shorter word or another situation.</p>`;
  };
  tabs.addEventListener("click", event => { const button = event.target.closest("[data-scenario]"); if (!button) return; selected = Number(button.dataset.scenario); search.value = ""; render(); });
  search.addEventListener("input", render);
  render();
}

wireAudio();
renderAffixTree();
renderPairs();
renderPhrasebook();
