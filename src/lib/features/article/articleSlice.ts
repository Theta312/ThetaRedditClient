import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../../store';
import { RedditData } from '../../../util/otherAPI/otherAPI';




interface articleState {
    value: RedditData;
}

const initialState: articleState = {
    value: {} as RedditData 
}

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        chooseArticle: (state, action: PayloadAction<RedditData>) => {
            state.value = action.payload;
        }
    }
});

export const { chooseArticle } = articleSlice.actions;
export default articleSlice.reducer;
export const articleSelected = (state: RootState) => state.article.value