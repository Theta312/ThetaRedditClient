import getFunc from '../../../util/homeAPI/homeAPI';


interface HomeObj {
    [key : string]: any
};

type homeAPIFunc = () => Promise<HomeObj>;


const homeAPILoad: homeAPIFunc = async() => {
    const response = await getFunc();
    const data = response.data.children;
    return data
};


export default homeAPILoad;