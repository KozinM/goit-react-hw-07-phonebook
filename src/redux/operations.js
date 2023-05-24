import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchingInProgress, fetchingSuccess, fetchingError } from "./contactsSlice";

axios.defaults.baseURL = "https://646c82b87b42c06c3b2b6620.mockapi.io/api/v1/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
 async (_,thunkAPI) => {
    try{
    const response = await axios.get("/contacts");
    return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }  
});

export const addContact = createAsyncThunk(
      "contacts/addContact",
      async ({name,number}, thunkAPI) => {
        try {
          const response = await axios.post("/contacts", {name, number});
          return response.data;
        } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
        }
      }
    );

    export const deleteContact = createAsyncThunk(
      "tasks/deleteTask",
      async (contactId, thunkAPI) => {
        try {
          const response = await axios.delete(`/contacts/${contactId}`);
          return response.data;
        } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
        }
      }
    );

/* export const fetchContacts = () => async dispatch => {
  try {
        // Индикатор загрузки
        dispatch(fetchingInProgress());
        // HTTP-запрос
        const response = await axios.get("/contacts");
        // Обработка данных
        dispatch(fetchingSuccess(response.data));
  } catch (e) {
        // Обработка ошибки
        dispatch(fetchingError(e.message));
  }
}; */