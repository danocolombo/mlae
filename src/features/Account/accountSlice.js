import { createAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { printObject } from '../../utils/helpers';

const initialState = {
    id: null,
    reference: null,
    balance: 0,
    transactions: [],
    isLoading: false,
};

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        loadAccount: (state, action) => {
            state.id = action?.payload?.id;
            state.reference = action?.payload?.reference || null;
            state.balance = action?.payload?.balance;
            state.isLoading = false;
            return state;
        },
        getTransactions: (state, action) => {
            return state.transactions;
        },
        loadTransactions: (state, action) => {
            state.transactions = action?.payload?.transactions;
            state.isLoading = false;
            return state;
        },
        logout: (state) => {
            state.meetings = [];
            // state.activeMeetings = [];
            // state.historicMeetings = [];
            state.specificMeeting = [];
            state.groups = [];
            state.tmpMeeting = {};
            // return state;
        },
    },
});

// Action creators are generated for each case reducer function
export const { loadAccount, getTransactions, loadTransactions, logout } =
    accountSlice.actions;
export default accountSlice.reducer;
