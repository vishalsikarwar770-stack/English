
import { renderRules } from "./ui.js";
import { loadProgress } from "./storage.js";

async function loadData() {
const beginner = await fetch("data/beginner.json").then(r => r.json());
const intermediate = await fetch("data/intermediate.json").then(r => r.json());
const advanced = await fetch("data/advanced.json").then(r => r.json());
return [...beginner, ...intermediate, ...advanced];
}

document.addEventListener("DOMContentLoaded", async () => {
const rules = await loadData();
renderRules(rules);
const progress = loadProgress();
document.getElementById("xp").textContent = progress.xp;
document.getElementById("completion").textContent =
Math.round((progress.completedRules.length / rules.length) * 100) + "%";

document.getElementById("themeToggle").onclick = () => {
document.body.classList.toggle("dark");
};
});
