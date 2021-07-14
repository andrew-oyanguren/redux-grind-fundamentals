import { configureStore } from '@reduxjs/toolkit';

// Import Slices:
import uiSlice from './slices/ui-slice';

const store = configureStore({
   reducer: {
     uiSlice: uiSlice.reducer,
   }
});

export default store;