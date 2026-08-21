const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const js = fs.readFileSync(path.join(root, "app.js"), "utf8");

for (const section of ["pronouns", "respect", "focus", "practice"]) {
  assert.match(html, new RegExp(`id=["']${section}["']`), `missing #${section} section`);
}

for (const id of ["personChoices", "caseCards", "dialogueCard", "focusChoices", "aspectChoices", "focusSentence", "quizStage"]) {
  assert.match(html, new RegExp(`id=["']${id}["']`), `missing #${id} hook`);
  assert.match(js, new RegExp(id), `JavaScript does not use #${id}`);
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
