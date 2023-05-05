

function prepareData(dataObject) {
  const logArray = [];

  for (const key of dataObject) {
    const log = dataObject[key];
    log.id = key;
    logArray.push(log);
  }
}

export {prepareData};