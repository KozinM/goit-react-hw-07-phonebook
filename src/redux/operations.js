import axios from "axios";
import { fetchingInProgress, fetchingSuccess, fetchingError } from "./contactsSlice";

axios.defaults.baseURL = "https://646c82b87b42c06c3b2b6620.mockapi.io/api/v1/";


export const fetchContacts = () => async dispatch => {
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
};