
import { saveProgress, loadProgress } from "./storage.js";
import { launchConfetti } from "./confetti.js";

export function startQuiz(rule) {
const quizSection = document.getElementById("quizSection");
quizSection.innerHTML = "";
quizSection.classList.remove("hidden");

rule.questions.forEach((q, index) => {
const div = document.createElement("div");
div.classList.add("quiz-question");
div.innerHTML = `<p>${q.question}</p>` +
q.options.map((opt, i) =>
`<button onclick="checkAnswer(${index}, ${i})">${opt}</button>`
).join("");
quizSection.appendChild(div);
});

window.checkAnswer = (qIndex, selected) => {
if (rule.questions[qIndex].answer === selected) {
let progress = loadProgress();
progress.xp += rule.xpReward;
if (!progress.completedRules.includes(rule.id)) {
progress.completedRules.push(rule.id);
}
saveProgress(progress);
launchConfetti();
alert("Correct! +" + rule.xpReward + " XP");
location.reload();
}
};
}
