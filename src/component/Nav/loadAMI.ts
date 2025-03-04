import Resources from '../../util/otherAPI/otherAPI';
import { RedditData } from '../../util/otherAPI/otherAPI';


const { AMIFunc } = Resources;




type AmIFuncType = () => Promise<RedditData[]>;

const loadAMIFunc: AmIFuncType = async() => {
    const response = await AMIFunc();
    return response;
};


export default loadAMIFunc;