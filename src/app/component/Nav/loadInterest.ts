import Resources from '../../../util/otherAPI/otherAPI';

const { InterestFunc } = Resources;


interface InterestObj {
    [key : string]: any
};

type InterestFuncType = () => Promise<InterestObj>;

const loadInterestFunc: InterestFuncType = async() => {
    const response = await InterestFunc();
    const data = response.data.children;
    return data;
};

export default loadInterestFunc;