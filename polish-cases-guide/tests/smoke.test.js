const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const js = fs.readFileSync(path.join(root, "app.js"), "utf8");

for (const section of ["course", "cases", "patterns", "verbs", "word-order", "studio", "practice"]) {
  assert.match(html, new RegExp(`id=["']${section}["']`), `missing #${section} section`);
}

for (const id of ["caseChoices", "caseCards", "caseTable", "triggerChoices", "triggerCard", "studioOptions", "quizOptions", "quizStage"]) {
  assert.match(html, new RegExp(`id=["']${id}["']`), `missing #${id} hook`);
  assert.match(js, new RegExp(id), `JavaScript does not use #${id}`);
}

assert.match(html, /seven cases/i, "seven-case emphasis is missing");
assert.match(html, /Question 1 of 20/, "quiz question count is stale");
assert.match(html, /case-chart/, "complete case chart is missing");
assert.match(html, /Turn a message[\s\S]*into a Polish clause/, "sentence studio lesson is missing");
assert.match(js, /function handleRadioKeys\(/, "keyboard radio navigation is missing");
assert.match(js, /const studioDrills = \[/, "sentence studio data is missing");
assert.match(js, /function renderStudio\(/, "sentence studio renderer is missing");
const caseBlock = js.slice(js.indexOf("const cases = ["), js.indexOf("const triggers = ["));
assert.strictEqual((caseBlock.match(/\n  \{\n    id:/g) || []).length, 7, "case lab should contain seven cases");
assert.strictEqual((js.match(/\n  \{ tag:/g) || []).length, 10, "sentence studio should contain ten prompts");
assert.strictEqual((js.match(/\n  \{ question:/g) || []).length, 20, "quiz should contain twenty questions");

for (const caseName of ["Nominative", "Genitive", "Dative", "Accusative", "Instrumental", "Locative", "Vocative"]) {
  assert.ok(js.includes(`name: "${caseName}"`), `missing ${caseName} case`);
}

for (const concept of ["negation", "motion", "recipient", "tool"]) {
  assert.match(js, new RegExp(`id: ["']${concept}["']`), `missing ${concept} trigger`);
}

assert.ok(css.length > 8000, "stylesheet appears incomplete");
assert.doesNotMatch(html, /href=["']#["']/, "empty hash link found");
assert.doesNotMatch(html + js + css, /\uFFFD/, "replacement character found");

console.log("Polish guide smoke checks passed.");
