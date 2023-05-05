import {
  createFoodEntry,
  getLogs,
  updateFoodEntry,
  deleteFoodEntry,
} from "./rest-service.js";

window.addEventListener("load", initApp);

// GLOBAL VARIABLES


function initApp() {
  updateFoodsGrid();
  /* ---------LISTENERS--------- */
  // document.querySelector("#year-form").addEventListener("submit", showYear);
  // document.querySelector("#month-form").addEventListener("submit", showMonth);
  // document.querySelector("#day-form").addEventListener("submit", showDay);
  document.querySelector("#create-entry-from").addEventListener("submit", createFoodEntryClicked);
}

async function updateFoodsGrid() {
  const foodList = await getLogs();
  // showYear(foodList);
  // showMonth(foodList);
  // showDay(foodList);
  showLogs(foodList);
}

function showLogs(logs) {
  document.querySelector("#entry").innerHTML = "";
  for (const log of logs) {
    showLog(log);
  }
}

function showYear(event) {
  event.preventDefault();
  const yearValue = document.querySelector("#year-input").value;
  const html = /*html */ `
  <p id="yeardom"> ${yearValue}</p>
  `;

  document.querySelector("#year").insertAdjacentHTML("beforeend", html);
}

function showMonth(event) {
  event.preventDefault();
  const monthValue = document.querySelector("#month-selected").value;
  const html = /*html */ `
  <p id="monthdom"> ${monthValue}</p>
  `;
  document.querySelector("#month").insertAdjacentHTML("beforeend", html);
}

function showDay(event) {
  event.preventDefault();
  const dayValue = document.querySelector("#day-selected").value;

  const html = /*html */ `
  <p id="daydom"> ${dayValue} </p>
  `;

  document.querySelector("#day").insertAdjacentHTML("beforeend", html);
}

function showLog(log) {
  const html =
    /* html */
    `     

    <article id="log">
        <p> ${log.entry}</p>
        <button class="delete-btn">Delete</button>
        <button class="update-btn">Update</button>
    </article>
                   
    `;

  document.querySelector("#day").insertAdjacentHTML("beforeend", html);

  document
    .querySelector(".delete-btn")
    .addEventListener("click", () => deleteClicked(log));

  document
    .querySelector(".update-btn")
    .addEventListener("click", () => updateClicked(log));
}

async function createFoodEntryClicked(event) {
  event.preventDefault();

  const form = document.querySelector("#create-entry-from");

  const entry = form.entry.value;
  const day = form.day.value;
  const month = form.month.value;
  const year = form.year.value;

  const response = await createFoodEntry( entry, day, month, year);

  if (response.ok) {
    updateFoodsGrid();
  }
}

function deleteClicked(logObject) {}

function updateClicked(logObject) {
  //saves the form in as a variable so easier to use below
  const updateForm = document.querySelector("#form-update-info");

  //the following makes info from object be displayed in the ModalWindow to provide
  //Feedback to the user



  //sets value of the form to that of the object
updateForm.entry.value = logObject.entry;
updateForm.day.value = logObject.day;
updateForm.month.value = logObject.month;
updateForm.year.value = logObject.year;

  //sets the id of the form to the id for the specific object
  updateForm.setAttribute("data-id", logObject.id);

  // //shows the update form
  // document.querySelector("#dialog-update-character").showModal();

  // console.log("Update button clicked!");
}
