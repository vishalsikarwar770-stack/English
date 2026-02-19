
export function renderRules(rules) {
const list = document.getElementById("ruleList");
list.innerHTML = "";
rules.forEach(rule => {
const div = document.createElement("div");
div.classList.add("rule-card");
div.innerHTML = `<h3>${rule.name}</h3><p>${rule.category}</p>`;
div.onclick = () => showRule(rule);
list.appendChild(div);
});
}
function showRule(rule) {
const content = document.getElementById("ruleContent");
content.classList.remove("hidden");
content.innerHTML = `
<h2>${rule.name}</h2>
<p>${rule.explanation}</p>
<ul>${rule.examples.map(e => `<li>${e}</li>`).join("")}</ul>
<p><strong>Incorrect:</strong> ${rule.incorrect.sentence}</p>
<p><i>${rule.incorrect.explanation}</i></p>
<button id="quizBtn">Start Quiz</button>
`;
document.getElementById("quizBtn").onclick =
() => import("./quiz.js").then(m => m.startQuiz(rule));
}
