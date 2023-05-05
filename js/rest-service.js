import { prepareData } from "./helpers.js";


const endpoint =
  "https://test-d2238-default-rtdb.europe-west1.firebasedatabase.app/";
// CREATE

async function createFoodEntry(entry, day, month, year) {
  const newEntryObject = {
    entry: entry,
    day: day,
    month: month,
    year: year,
  };

  const response = await fetch(`${endpoint}/food.json`, {
    method: "POST",
    body: JSON.stringify(newEntryObject),
  });

  return response;
}

// READ

async function getLogs() {
  const response = await fetch(`${endpoint}/food.json`);
  const data = await response.json();
  const logs = prepareData(data);
  return logs;
}

// UPDATE
async function updateFoodEntry(id, entry, day, month, year) {
  const foodEntryToUpdate = {
    entry: entry,
    day: day,
    month: month,
    year: year,
  };

  const response = fetch(`${endpoint}/food/${id}.json`, {
    method: "PUT",
    body: JSON.stringify(foodEntryToUpdate),
  });

  return response;
}

// DELETE
async function deleteFoodEntry(foodEntry) {
  const id = foodEntry.id;

  const response = fetch(`${endpoint}/food/${id}.json`, {
    method: "DELETE",
  });

  return response;
}

export { createFoodEntry, getLogs, updateFoodEntry, deleteFoodEntry};