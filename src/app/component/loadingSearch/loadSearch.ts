import Resources from '../../../util/otherAPI/otherAPI';

const { searchFunc } = Resources;

interface ArticleData {
    [key: string]: string;
}

interface Article {
    data: ArticleData;
    kind: string;
} 

interface SearchObj {
    [key : string]: Article[];
}

type searchAPIFuncType = (word: string) => Promise<SearchObj>;

const searchAPIFunc: searchAPIFuncType = async(word: string) => {
    const response = await searchFunc(word);
    const data = response.data.children;
    return data;
};



export default searchAPIFunc;