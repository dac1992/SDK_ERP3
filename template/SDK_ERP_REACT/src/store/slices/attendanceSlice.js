import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todayRecords: {
    checkIn: null,
    checkOut: null,
  },
  loading: false,
  error: null,
  lastLocation: null,
  deviceInfo: null,
};

export const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    checkInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    checkInSuccess: (state, action) => {
      state.loading = false;
      state.todayRecords.checkIn = action.payload;
      state.lastLocation = action.payload.location;
      state.deviceInfo = action.payload.deviceInfo;
    },
    checkInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    checkOutStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    checkOutSuccess: (state, action) => {
      state.loading = false;
      state.todayRecords.checkOut = action.payload;
      state.lastLocation = action.payload.location;
      state.deviceInfo = action.payload.deviceInfo;
    },
    checkOutFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateLocation: (state, action) => {
      state.lastLocation = action.payload;
    },
    updateDeviceInfo: (state, action) => {
      state.deviceInfo = action.payload;
    },
    resetDailyRecords: (state) => {
      state.todayRecords = initialState.todayRecords;
    },
  },
});

export const {
  checkInStart,
  checkInSuccess,
  checkInFailure,
  checkOutStart,
  checkOutSuccess,
  checkOutFailure,
  updateLocation,
  updateDeviceInfo,
  resetDailyRecords,
} = attendanceSlice.actions;

export const attendanceReducer = attendanceSlice.reducer; 