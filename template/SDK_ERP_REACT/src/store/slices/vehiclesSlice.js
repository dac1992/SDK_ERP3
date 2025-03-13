import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  vehicles: [],
  currentVehicle: null,
  maintenanceRecords: [],
  insuranceRecords: [],
  loading: false,
  error: null,
  filters: {
    status: 'all',
    type: 'all',
    search: '',
  },
};

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    fetchVehiclesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchVehiclesSuccess: (state, action) => {
      state.loading = false;
      state.vehicles = action.payload;
    },
    fetchVehiclesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchVehicleDetailStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchVehicleDetailSuccess: (state, action) => {
      state.loading = false;
      state.currentVehicle = action.payload;
    },
    fetchVehicleDetailFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchMaintenanceRecordsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMaintenanceRecordsSuccess: (state, action) => {
      state.loading = false;
      state.maintenanceRecords = action.payload;
    },
    fetchMaintenanceRecordsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchInsuranceRecordsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchInsuranceRecordsSuccess: (state, action) => {
      state.loading = false;
      state.insuranceRecords = action.payload;
    },
    fetchInsuranceRecordsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearCurrentVehicle: (state) => {
      state.currentVehicle = null;
    },
  },
});

export const {
  fetchVehiclesStart,
  fetchVehiclesSuccess,
  fetchVehiclesFailure,
  fetchVehicleDetailStart,
  fetchVehicleDetailSuccess,
  fetchVehicleDetailFailure,
  fetchMaintenanceRecordsStart,
  fetchMaintenanceRecordsSuccess,
  fetchMaintenanceRecordsFailure,
  fetchInsuranceRecordsStart,
  fetchInsuranceRecordsSuccess,
  fetchInsuranceRecordsFailure,
  updateFilters,
  clearCurrentVehicle,
} = vehiclesSlice.actions;

export const vehiclesReducer = vehiclesSlice.reducer; 