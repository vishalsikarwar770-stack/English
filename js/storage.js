
export function saveProgress(data) {
localStorage.setItem("grammarProgress", JSON.stringify(data));
}
export function loadProgress() {
return JSON.parse(localStorage.getItem("grammarProgress")) || {
xp: 0,
completedRules: []
};
}
