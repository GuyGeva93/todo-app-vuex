
export const utilService = {
  saveToStorage,
  loadFromStorage,
  deleteFromStorage,
  makeId
}

function saveToStorage(key, data) {
  var json = JSON.stringify(data);
  localStorage.setItem(key, json);
}

function loadFromStorage(key) {
  var json = localStorage.getItem(key);
  var data = JSON.parse(json);
  return data;
}

function deleteFromStorage(key) {
  localStorage.removeItem(key);
}

function makeId(length = 5) {
  var txt = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}