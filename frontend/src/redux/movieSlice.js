import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk for fetching combined movie/TV data (used by Home/Movies)
export const getMovies = createAsyncThunk(
  'movie/getMovies',
  async () => {
    const res = await fetch('http://localhost:5000/api/movies/popular');
    const data = await res.json();
    return data;
  }
);

// 🛠️ NEW THUNK: Thunk for fetching ONLY TV show data
export const getTVShowsData = createAsyncThunk(
  'movie/getTVShowsData',
  async () => {
    // Calls the dedicated backend endpoint for TV shows
    const res = await fetch('http://localhost:5000/api/movies/tvshows'); 
    const data = await res.json();
    return data;
  }
);


const initialState = {
  data: null,
  tvData: null, // 🛠️ NEW: Separate state for TV Show data
  isLoading: false,
  isError: false,
};

// Slice is now a named export
export const movieSlice = createSlice({ 
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload; // Stores combined data
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.isError = true;
      })
      // 🛠️ NEW: Handle TV Show data fulfillment
      .addCase(getTVShowsData.fulfilled, (state, action) => {
        state.tvData = action.payload; // Stores ONLY TV show data
      });
  },
});