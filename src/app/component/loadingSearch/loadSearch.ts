import Resources from '../../../util/otherAPI/otherAPI';
import { RedditData } from '../../../util/otherAPI/otherAPI';


const { searchFunc } = Resources;



type searchAPIFuncType = (word: string) => Promise<RedditData[]>;

const searchAPIFunc: searchAPIFuncType = async(word: string) => {
    const response = await searchFunc(word);;
    return response;
};



export default searchAPIFunc;