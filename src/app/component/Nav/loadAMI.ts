import Resources from '../../../util/otherAPI/otherAPI';

const { AMIFunc } = Resources;

interface ArticleData {
    [key: string]: string;
}

interface Article {
    data: ArticleData;
    kind: string;
} 

interface AmIObj {
    [key : string]: Article[];
};



type AmIFuncType = () => Promise<AmIObj>;

const loadAMIFunc: AmIFuncType = async() => {
    const response = await AMIFunc();
    const data = response.data.children;
    return data
};


export default loadAMIFunc;