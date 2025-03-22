const load = key => {
  try {
    const state = localStorage.getItem(key);
    return state === null ? undefined : JSON.parse(key);
  } catch {
    console.error('Get state error', error.message);
  }
};
const save = (key, value) => {
  try {
    const state = JSON.stringify(value);
    localStorage.setItem(key, state);
  } catch {
    console.error('Get state error', error.message);
  }
};
const remove = key => {
  try {
    const state = localStorage.getItem(key);
    state === null ? undefined : localStorage.removeItem(state);
  } catch {
    console.error('Get state error', error.message);
  }
};

export { load, save, remove };
