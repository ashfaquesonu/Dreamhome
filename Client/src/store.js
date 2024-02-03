const { configureStore,getDefaultMiddleware } = require('@reduxjs/toolkit');
const { default: userReducer } = require('./reducers/userReducer');
const { default: usersListReducer } = require('./reducers/usersListReducer');

const thunk = require('redux-thunk').default; // Import redux-thunk

const store = configureStore({
  reducer: {
    user: userReducer,
    teamList: usersListReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk], // Apply redux-thunk middleware
});

// Inferred type: { user: UserState, teamList: TeamListState, animalList: AnimalListState }
const RootState = store.getState;
const AppDispatch = store.dispatch;

module.exports = {
  store,
  RootState,
  AppDispatch,
};