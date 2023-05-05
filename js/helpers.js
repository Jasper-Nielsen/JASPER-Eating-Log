

// function prepareData(dataObject) {
//   const logArray = [];

//   for (const key in dataObject) {
//     const logObject = dataObject[key];
//     logObject.id = key;
//     logArray.push(logObject);
//   }
 
//   return logArray;
// }

export {prepareData};


function prepareData(dataObject) {
  const characterArray = [];
  for (const key in dataObject) {
    const characterObject = dataObject[key];
    characterObject.id = key;
    characterArray.push(characterObject);
  }
  console.log(characterArray);
  return characterArray;
}