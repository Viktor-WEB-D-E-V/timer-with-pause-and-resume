const load = key => {
  try {
    const state = localStorage.getItem(key);
    return state === null ? undefined : JSON.parse(state);
  } catch (error) {
    console.error('Get state error', error.message);
  }
};
const save = (key, value) => {
  try {
    const state = JSON.stringify(value);
    localStorage.setItem(key, state);
  } catch (error) {
    console.error('Get state error', error.message);
  }
};
const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Get state error', error.message);
  }
};

export { load, save, remove };
