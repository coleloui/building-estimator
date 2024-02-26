import { configureStore } from '@reduxjs/toolkit';

// import components
import memberReducer from './slices/member';

export default configureStore({
  reducer: {
    member: memberReducer,
  },
});
