import { createSlice } from '@reduxjs/toolkit';
import { en, ua } from '../multiLanguage';

const initialState = {
    isLoading: false,
    isLoggedIn: true,
    accessToken: null,
    refreshToken: null,
    userData: null,
    lang: en,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        google: (state, action) => {
            state.userData = action.payload.user;
        },
        changeLang: (state, action) => {
            switch (action.payload) {
                case 'en':
                    state.lang = en;
                    break;

                case 'ua':
                    state.lang = ua;
                    break;

                default:
                    state.lang = en;
                    break;
            }
        },
    },
});

export const { google, changeLang } = userSlice.actions;

export default userSlice.reducer;
