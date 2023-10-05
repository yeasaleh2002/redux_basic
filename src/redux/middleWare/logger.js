const logger = (store) => (next) => (action) => {
console.log("Current State", store.getState());
console.log("Action", action);

next(action); // this next call is required. otherwise, it should hold there.
console.log("Updated State", store.getState())
};

export default logger;