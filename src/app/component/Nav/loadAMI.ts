import Resources from '../../../util/otherAPI/otherAPI';

const { AMIFunc } = Resources;

interface AmIObj {
    [key : string]: any
};



type AmIFuncType = () => Promise<AmIObj>;

const loadAMIFunc: AmIFuncType = async() => {
    const response = await AMIFunc();
    const data = response.data.children;
    return data
};


export default loadAMIFunc;