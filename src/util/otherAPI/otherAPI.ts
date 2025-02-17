type AMIFuncType = () => Promise<any>;
type InterestFuncType = () => Promise<any>;
type searchFuncType= (word: string) => Promise<any>;

const AMIFunc: AMIFuncType = async() => {
    const amIUrl = 'https://www.reddit.com/r/AITAH.json';
  
    try {
        const response = await fetch(amIUrl);

        if (response.ok) {
            const responseJson = await response.json();
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