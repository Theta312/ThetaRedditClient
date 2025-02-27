import getFunc from '../../../util/homeAPI/homeAPI';






interface ArticleData {
    [key: string]: string;
}

interface Article {
    data: ArticleData;
    kind: string;
} 

interface HomeObj {
    data: Article[];
};

type homeAPIFunc = () => Promise<HomeObj>;


const homeAPILoad: homeAPIFunc = async() => {
    const response = await getFunc();
    const data = response.data.children;
    return data
};


export default homeAPILoad;