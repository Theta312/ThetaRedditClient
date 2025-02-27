import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../../store';



interface Article {
    data: ArticleData;
    kind: string;
} 

interface ArticleData {
    [key: string]: string;
}

interface ArticleState {
    value: Article;
}

const initialState: ArticleState = {
    value: {
        data: {},
        kind: ''
    }
};

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        chooseArticle: (state, action: PayloadAction<Article>) => {
            state.value = action.payload;
        }
    }
});

export const { chooseArticle } = articleSlice.actions;
export default articleSlice.reducer;
export const articleSelected = (state: RootState) => state.article.value