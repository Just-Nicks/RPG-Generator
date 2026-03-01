import { SCI_FI, ROBOTS, SCI_LAST_N } from "./js/SCIFI_names.js"
import { MODERN, MODERN_LAST_N } from "./js/MODERN_names.js"
import { MEDIEVAL, MEDIEVAL_LAST_N } from "./js/MEDIEVAL_names.js";
import { APOCALYPSE, APOCALYPSE_LAST_N } from "./js/APOCALYPSE_names.js";
import { STEAMPUNK, STEAMPUNK_LAST_N } from "./js/STEAMPUNK_names.js"

import { OCCUPATION } from "./js/works.js";

function random(array) {
    return array[Math.floor(Math.random() * array.length)]
}

const selection_type = document.getElementById("c_type");
const selection_sex = document.getElementById("c_sex");
const button = document.getElementById("gen-bnt")

button.addEventListener("click", generate)

function generate() {

    // LETS:
    let SCI_name = random(SCI_FI[selection_sex.value]);
    let SCI_LN = random(SCI_LAST_N);

    let ROBOT_name = random(ROBOTS);

    let MODERN_name = random(MODERN[selection_sex.value]);
    let MODERN_LN = random(MODERN_LAST_N);

    let MEDIEVAL_name = random(MEDIEVAL[selection_sex.value]);
    let MEDIEVAL_LN = random(MEDIEVAL_LAST_N);

    let APOCALYPSE_name = random(APOCALYPSE[selection_sex.value]);
    let APOCALYPSE_LN = random(APOCALYPSE_LAST_N);

    let STEAMPUNK_name = random(STEAMPUNK[selection_sex.value]);
    let STEAMPUNK_LN = random(STEAMPUNK_LAST_N);

    let WORK = random(OCCUPATION[selection_type.value]);

    // Random AGE

    let age = Math.floor(Math.random() * (80 - 16 + 1)) + 16;

    document.getElementById("age").textContent = age

    // Fist and last Name:

    if (selection_type.value === "SCI_FI") {
        document.getElementById("first_name").textContent = SCI_name;
        document.getElementById("last_name").textContent = SCI_LN;
    } else if (selection_type.value === "ROBOT") {
        document.getElementById("first_name").textContent = ROBOT_name;
        document.getElementById("last_name").textContent = "N/A";
    } else if (selection_type.value === "MODERN") {
        document.getElementById("first_name").textContent = MODERN_name;
        document.getElementById("last_name").textContent = MODERN_LN;
    } else if (selection_type.value === "MEDIEVAL") {
        document.getElementById("first_name").textContent = MEDIEVAL_name;
        document.getElementById("last_name").textContent = MEDIEVAL_LN;
    } else if (selection_type.value === "APOCALYPSE") {
        document.getElementById("first_name").textContent = APOCALYPSE_name;
        document.getElementById("last_name").textContent = APOCALYPSE_LN;
    } else if (selection_type.value === "STEAMPUNK") {
        document.getElementById("first_name").textContent = STEAMPUNK_name;
        document.getElementById("last_name").textContent = STEAMPUNK_LN
    }

    // OCCUPATION / WORK

    document.getElementById("occupation").textContent = WORK;

    // Character sex:
    
    if (selection_sex.value === "man") {
        document.getElementById("sex").textContent = "Man"
    } else {
        document.getElementById("sex").textContent = "Fem"
    }

}