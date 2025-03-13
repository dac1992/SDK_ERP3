import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  meetings: [],
  currentMeeting: null,
  suppliers: [],
  experts: [],
  materials: [],
  loading: false,
  error: null,
  filters: {
    status: 'all',
    date: null,
    search: '',
  },
};

export const meetingsSlice = createSlice({
  name: 'meetings',
  initialState,
  reducers: {
    fetchMeetingsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMeetingsSuccess: (state, action) => {
      state.loading = false;
      state.meetings = action.payload;
    },
    fetchMeetingsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchMeetingDetailStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMeetingDetailSuccess: (state, action) => {
      state.loading = false;
      state.currentMeeting = action.payload;
    },
    fetchMeetingDetailFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchSuppliersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuppliersSuccess: (state, action) => {
      state.loading = false;
      state.suppliers = action.payload;
    },
    fetchSuppliersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchExpertsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchExpertsSuccess: (state, action) => {
      state.loading = false;
      state.experts = action.payload;
    },
    fetchExpertsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchMaterialsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMaterialsSuccess: (state, action) => {
      state.loading = false;
      state.materials = action.payload;
    },
    fetchMaterialsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearCurrentMeeting: (state) => {
      state.currentMeeting = null;
    },
  },
});

export const {
  fetchMeetingsStart,
  fetchMeetingsSuccess,
  fetchMeetingsFailure,
  fetchMeetingDetailStart,
  fetchMeetingDetailSuccess,
  fetchMeetingDetailFailure,
  fetchSuppliersStart,
  fetchSuppliersSuccess,
  fetchSuppliersFailure,
  fetchExpertsStart,
  fetchExpertsSuccess,
  fetchExpertsFailure,
  fetchMaterialsStart,
  fetchMaterialsSuccess,
  fetchMaterialsFailure,
  updateFilters,
  clearCurrentMeeting,
} = meetingsSlice.actions;

export const meetingsReducer = meetingsSlice.reducer; 