let arrays = [];

function createId() {
  return Math.floor(Math.random() * 1000);
}

function checkId(id) {
  return !!arrays.find((item) => item.id === id);
}

function generateRandomId() {
  let id = createId();
  while (checkId(id)) {
    id = createId();
  }
  return id;
}
