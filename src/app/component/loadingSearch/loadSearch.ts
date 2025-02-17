import Resources from '../../../util/otherAPI/otherAPI';

const { searchFunc } = Resources;

interface SearchObj {
    [key : string]: any
}

type searchAPIFuncType = (word: string) => Promise<SearchObj>;

const searchAPIFunc: searchAPIFuncType = async(word: string) => {
    const response = await searchFunc(word);
    const data = response.data.children;
    return data;
};



export default searchAPIFunc;