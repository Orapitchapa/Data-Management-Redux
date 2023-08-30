import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../redux/Store";

const selectDataState = (state: RootState) => state.data;

interface Data {
    key: React.Key;
    title: string;
    firstName: string;
    lastName: string;
    birthdate: string;
    nationality: string;
    gender: string;
    citizenId: string;
    phoneNumber: string;
    passportNumber: string;
    expectedSalary: string;
}

interface DataState {
    data: Data[];
}

const initialState: DataState = {
    data: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<Data[]>) => {
            const newData = action.payload.map((item, index) => ({ ...item, key: index + 1 }));
            state.data = newData;
        },
        addData: (state, action: PayloadAction<Data>) => {
            const newData = { ...action.payload, key: state.data.length + 1 }
            state.data.push(newData);
        },
        deleteData: (state, action: PayloadAction<React.Key>) => {
            state.data = state.data.filter((item) => item.key !== action.payload);
        },
    },
});

export const selectData = createSelector(
    selectDataState,
    (data) => data
);
export const { setData, addData, deleteData } = dataSlice.actions;
export default dataSlice.reducer;
