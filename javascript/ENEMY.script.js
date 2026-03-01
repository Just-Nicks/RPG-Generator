// Consts & Lets
const button = document.getElementById("gen-bnt");
button.addEventListener("click", generate);

const damage_select = document.getElementById("damage_range");
const shield_select = document.getElementById("shield_range");

const dices = ["4", "6", "8", "10", "12", "20"];

function generate() {
  // Damage e shield
  let damage = dices[Math.floor(Math.random() * dices.length)];
  let shield = dices[Math.floor(Math.random() * dices.length)];

  document.getElementById("damage_lvl").textContent = "D" + damage;
  document.getElementById("shield_lvl").textContent = "D" + shield;

  // Danger

  if (damage === "20") {
    document.getElementById("danger_lvl").textContent = "EXTREME";
  } else if (damage >= 10) {
    document.getElementById("danger_lvl").textContent = "HIGH";
  } else if (damage >= 8) {
    document.getElementById("danger_lvl").textContent = "MEDIUM";
  } else {
    document.getElementById("danger_lvl").textContent = "LOW";
  }
}
