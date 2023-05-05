import { prepareData } from "./helpers.js";

// CREATE

async function createFoodEntry(time, food) {
  const newEntryObject = {
    time: time,
    food: food,
  };

  const response = await fetch(`${endpoint}/food.json`, {
    method: "POST",
    body: JSON.stringify(newEntryObject),
  });

  return response;
}

// READ

async function getLogs() {
  const response = await fetch(`${endpoint}/logs.json`);
  const data = await response.json();
  const logs = prepareData(data);
  return logs;
}

// UPDATE
async function updateFoodEntry(id, time, food) {
  const foodEntryToUpdate = {
    time: time,
    food: food,
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