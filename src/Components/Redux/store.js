import { configureStore } from '@reduxjs/toolkit';

// Optionally, you can include middleware or use a default reducer function
const store = configureStore({
  reducer: {}, // Empty object, no reducers needed
  // You can add middleware here if necessary
});

export default store;
