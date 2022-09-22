import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

// Getting all planets for WklyyTodo from the server
export const getWeekPlanetsThunk = createAsyncThunk(
  "planet/getWeekPlanetsThunk",
  async (memberId, thunkAPI) => {
    try {
      const { data } = await apis.getWeekPlanets(memberId);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// Getting a planet for DlyTodo from the server
export const getDayPlanetThunk = createAsyncThunk(
  "planet/getDayPlanetsThunk",
  async (memberId, thunkAPI) => {
    try {
      const { data } = await apis.followingMember(memberId);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  planets: [],
  planet: [],
  isLoading: false,
  error: null,
};

const followSlice = createSlice({
  name: "planet",
  initialState,
  reducers: {},
  extraReducers: {
    [getWeekPlanetsThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getWeekPlanetsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.planets = action.payload;
    },
    [getWeekPlanetsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [getDayPlanetThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getDayPlanetThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.planet = action.payload;
    },
    [getDayPlanetThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const { } = followSlice.actions;
export default followSlice.reducer;