
interface data {
    [key:string]: string | object;
}

interface dataArr {
    data: data;
    kind: string;
}

type Children = dataArr[];

interface Response {
    data: {
        children: Children;
    };
    kind: string;
}
        



type AMIFuncType = () => Promise<Response>;
type InterestFuncType = () => Promise<Response>;
type searchFuncType= (word: string) => Promise<Response>;

const AMIFunc: AMIFuncType = async() => {
    const amIUrl = 'https://www.reddit.com/r/AmItheAsshole.json';
  
    try {
        const response = await fetch(amIUrl);

        if (response.ok) {
            const responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        }
    } catch(e) {
        console.log(e)
    }
};

const InterestFunc: InterestFuncType = async() => {
    const urlToInterest = 'https://www.reddit.com/r/interestingasfuck.json';
      
    try {
      const response = await fetch(urlToInterest);
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
    } catch(e) {
      console.log(e)
    }
  
};

const searchFunc: searchFuncType = async(word: string) => {
    const searchUrl = `https://www.reddit.com/search.json?q=${word}`;

    try {
        const response = await fetch(searchUrl);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch(error) {
        console.error(error);
    }
};

const resources = {
    AMIFunc,
    InterestFunc,
    searchFunc
};

export default resources;