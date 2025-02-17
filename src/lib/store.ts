import { configureStore, combineReducers } from "@reduxjs/toolkit";
import HomeSliceReducer from './features/home/homeSlice';
import ArticleSliceReducer from './features/article/articleSlice';


const rootReducer = combineReducers({
    home: HomeSliceReducer,
    article: ArticleSliceReducer
});


export const makeStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    })
};


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];