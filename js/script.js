"use strict";

import { createFoodEntry, getLogs, updateFoodEntry, deleteFoodEntry } from "./rest-service.js";

window.addEventListener("load", initApp);

// GLOBAL VARIABLES
const endpoint =
  "https://test-d2238-default-rtdb.europe-west1.firebasedatabase.app/";



function initApp() {

/* ---------LISTENERS--------- */
document.querySelector("#day-form").addEventListener("submit", createDayClicked);


}

async function updateFoodsGrid() {
  const foodList = await getLogs();
  showLogs(foodList);
}





function showLogs(logs) {
  for (const log of logs) {
    showLog(log);
  }
}

function showLog(log) {
  const html = /* html */ `
  <article id="log">
    <p> ${log.time} ${log.food}</p>
    <button class="delete-btn">Delete</button>
    <button class="update-btn">Update</button>
</article>
    `;

  document.querySelector("#table-body").insertAdjacentHTML("beforeend", html);
  
  document
  .querySelector(".delete-btn")
  .addEventListener("click", () => deleteClicked(log));

  document
    .querySelector(".update-btn")
    .addEventListener("click", () => updateClicked(log));

}

function createDayClicked(event) {
    event.preventDefault();


  }

  


function deleteClicked(log)
