import { PayloadAction } from "@reduxjs/toolkit";
import homeAPILoad from '../../../app/component/loadingHome/homeAPILoad';
import searchAPIFunc from '../../../app/component/loadingSearch/loadSearch'
import loadInterestFunc from '../../../app/component/Nav/loadInterest';
import loadAMIFunc from '../../../app/component/Nav/loadAMI';
import { RootState } from '../../store';
import { createAppSlice } from '../../createAppSlice'
import { RedditData } from '../../../util/otherAPI/otherAPI';




interface HomeState {
    value: RedditData[],
    isLoading: boolean,
    loadingFailed: boolean
}

const initialState: HomeState = {
    value: [],
    isLoading: false,
    loadingFailed: false
};

const homeSlice = createAppSlice({
    name: 'home',
    initialState,
    reducers: (create) => ({
        loadInfo: create.asyncThunk(
            async() => {
                const info = await homeAPILoad();
                return info;
            },
            {
                pending: (state) => {
                    state.isLoading = true;
                    state.loadingFailed = false;
                },
                fulfilled: (state, action: PayloadAction<RedditData[]>) => {
                    state.isLoading = false;
                    state.loadingFailed = false;
                    state.value = action.payload;
                },
                rejected: (state) => {
                    state.isLoading = false;
                    state.loadingFailed = true; 
                }
            },
        ),
        loadSearch: create.asyncThunk(
            async(word:string) => {
                const search = await searchAPIFunc(word);
                return search;
            },
            {
                pending: (state) => {
                    state.isLoading = true;
                    state.loadingFailed = false;
                },
                fulfilled: (state, action: PayloadAction<RedditData[]>) => {
                    state.isLoading = false;
                    state.loadingFailed = false;
                    state.value = action.payload;
                },
                rejected: (state) => {
                    state.isLoading = false;
                    state.loadingFailed = true;
                }
            },
        ),
        loadIAM: create.asyncThunk(
            async() => {
                const data = await loadAMIFunc();
                return data;
            },
             {
                pending: (state) => {
                    state.isLoading = true;
                    state.loadingFailed = false;
                },
                fulfilled: (state, action: PayloadAction<RedditData[]>) => {
                    state.isLoading = false;
                    state.loadingFailed = false;
                    state.value = action.payload;
                },
                rejected: (state) => {
                    state.isLoading = false;
                    state.loadingFailed = true;
                }
             },
        ),
        loadInterest: create.asyncThunk(
            async() => {
                const data = await loadInterestFunc();
                return data;
            }, 
            {
                pending: (state) => {
                    state.isLoading = true;
                    state.loadingFailed = false;
                },
                fulfilled: (state, action: PayloadAction<RedditData[]>) => {
                    state.isLoading = false;
                    state.loadingFailed = false;
                    state.value = action.payload;
                },
                rejected: (state) => {
                    state.isLoading = false;
                    state.loadingFailed = true;
                }
            }
        )
    })
});

export const { loadInfo, loadSearch, loadIAM, loadInterest } = homeSlice.actions;
export default homeSlice.reducer;
export const homeState = (state: RootState) => state.home.value;
export const homeLoading = (state: RootState) => state.home.isLoading;