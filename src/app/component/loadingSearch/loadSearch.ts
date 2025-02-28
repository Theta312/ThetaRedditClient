import Resources from '../../../util/otherAPI/otherAPI';
import { RedditData } from '../../../util/otherAPI/otherAPI';


const { searchFunc } = Resources;

interface ArticleData {
    [key: string]: string;
}

interface Article {
    data: ArticleData;
    kind: string;
} 



type searchAPIFuncType = (word: string) => Promise<RedditData[]>;

const searchAPIFunc: searchAPIFuncType = async(word: string) => {
    const response = await searchFunc(word);;
    return response;
};



export default searchAPIFunc;