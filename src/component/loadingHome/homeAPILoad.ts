import getRedditPost from '../../util/homeAPI/homeAPI';
import { RedditData } from '../../util/otherAPI/otherAPI'







type homeAPIFunc = () => Promise<RedditData[]>;


const homeAPILoad: homeAPIFunc = async() => {
    const response = await getRedditPost();
    return response;
};


export default homeAPILoad;