import Resources from '../../../util/otherAPI/otherAPI';
import { RedditData } from '../../../util/otherAPI/otherAPI';

const { InterestFunc } = Resources;


type InterestFuncType = () => Promise<RedditData[]>;

const loadInterestFunc: InterestFuncType = async() => {
    const response = await InterestFunc();
    return response;
};

export default loadInterestFunc;