import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  const res = await axios.get("/api/tasks");
  return res.data;
});

export const addTask = createAsyncThunk("tasks/add", async (title: string) => {
  const res = await axios.post("/api/tasks", { title });
  return res.data;
});

export const toggleTask = createAsyncThunk("tasks/toggle", async ({ id, completed }: any) => {
  const res = await axios.put(`/api/tasks/${id}`, { completed });
  return res.data;
});

export const deleteTask = createAsyncThunk("tasks/delete", async (id: number) => {
  await axios.delete(`/api/tasks/${id}`);
  return id;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: { items: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(toggleTask.fulfilled, (state, action) => {
        const index = state.items.findIndex((t: any) => t.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter((t: any) => t.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
