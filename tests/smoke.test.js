const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const js = fs.readFileSync(path.join(root, "app.js"), "utf8");

for (const section of ["course", "pronouns", "respect", "focus", "forms", "word-order", "workshop", "practice"]) {
  assert.match(html, new RegExp(`id=["']${section}["']`), `missing #${section} section`);
}

for (const id of ["personChoices", "caseCards", "dialogueCard", "focusChoices", "aspectChoices", "focusSentence", "studioStage", "quizStage"]) {
  assert.match(html, new RegExp(`id=["']${id}["']`), `missing #${id} hook`);
  assert.match(js, new RegExp(id), `JavaScript does not use #${id}`);
}

assert.match(html, /class=["']pronoun-chart["']/, "missing complete pronoun chart");
assert.match(html, /<table>[\s\S]*<\/table>/, "pronoun chart must use table markup");
assert.match(html, /id=["']focusChoices["'][^>]*role=["']radiogroup["']/, "focus choices must identify as a radio group");
assert.match(html, /id=["']aspectChoices["'][^>]*role=["']radiogroup["']/, "aspect choices must identify as a radio group");
assert.match(js, /function handleRadioKeys\(/, "keyboard radio navigation is missing");
assert.match(css, /\.site-header nav \{ width: 100%;/, "mobile navigation must remain available");
assert.match(html, /Learn the family[\s\S]*build the aspect/, "verb-formation lesson is missing");
assert.match(html, /Predicate first[\s\S]*Markers keep the roles clear/, "word-order lesson is missing");
assert.match(html, /Question 1 of 20/, "quiz question count is stale");
assert.match(html, /Kumain na <mark>po ba<\/mark> kayo\?/, "po question-order example is missing");
assert.strictEqual((js.match(/\n    question:/g) || []).length, 20, "quiz should contain twenty questions");
assert.match(html, /category names—not words to add/, "pronoun marker warning is missing");
assert.match(html, /Nakita <mark>kita<\/mark>/, "kita usage lesson is missing");
assert.match(html, /libro <mark>ko<\/mark>/, "possessive pronoun lesson is missing");
assert.match(html, /A guided course, not a phrasebook/, "course roadmap is missing");
assert.match(html, /Turn a message[\s\S]*into a clause/, "sentence studio lesson is missing");
assert.match(js, /const studioDrills = \[/, "sentence studio data is missing");
assert.match(js, /function renderStudio\(/, "sentence studio renderer is missing");
assert.strictEqual((js.match(/\n    tag: /g) || []).length, 10, "sentence studio should contain ten transformations");

for (const family of ["-um-", "mag-", "ma- / mang-", "-in / -hin", "i-", "-an / -han", "ipag- / ipang-"]) {
  assert.ok(html.includes(family), `missing ${family} verb-family guidance`);
}

for (const pronoun of ["ako", "ikaw", "siya", "kami", "tayo", "kayo", "sila"]) {
  assert.match(js, new RegExp(`id: ["']${pronoun}["']`), `missing ${pronoun} pronoun entry`);
}

for (const focus of ["actor", "object", "location", "beneficiary", "instrument"]) {
  assert.match(js, new RegExp(`\\n  ${focus}:`), `missing ${focus} focus lesson`);
}

assert.ok(css.length > 10000, "stylesheet appears incomplete");
assert.doesNotMatch(html, /href=["']#["']/, "empty hash link found");
assert.doesNotMatch(html + js + css, /\uFFFD/, "replacement character found");

console.log("Static guide smoke checks passed.");
