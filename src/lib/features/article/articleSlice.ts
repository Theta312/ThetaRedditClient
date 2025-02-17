import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../../store';


interface Value {
    [key: string]: any
}

interface ArticleState {
    value: Value;
}

const initialState: ArticleState = {
    value: {}
};

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        chooseArticle: (state, action: PayloadAction<Value>) => {
            state.value = action.payload;
        }
    }
});

export const { chooseArticle } = articleSlice.actions;
export default articleSlice.reducer;
export const articleSelected = (state: RootState) => state.article.value