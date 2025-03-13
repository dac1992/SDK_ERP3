import { configureStore } from '@reduxjs/toolkit';
import { attendanceReducer } from './slices/attendanceSlice';
import { meetingsReducer } from './slices/meetingsSlice';
import { vehiclesReducer } from './slices/vehiclesSlice';
import { authReducer } from './slices/authSlice';

const store = configureStore({
  reducer: {
    attendance: attendanceReducer,
    meetings: meetingsReducer,
    vehicles: vehiclesReducer,
    auth: authReducer,
  },
});

export default store; 