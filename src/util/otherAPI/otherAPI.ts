

export interface RedditData {
    data: {
        id: string;
        title: string;
        selftext: string;
        ups: number;
        author: string;
        thumbnail: string;
    }
}


type AMIFuncType = () => Promise<RedditData[]>;
type InterestFuncType = () => Promise<RedditData[]>;
type searchFuncType= (word: string) => Promise<RedditData[]>;

const AMIFunc: AMIFuncType = async() => {
    const amIUrl = 'https://www.reddit.com/r/AmItheAsshole.json';
  
    try {
        const response = await fetch(amIUrl);

        if (response.ok) {
            const responseJson = await response.json();
            return responseJson.data.children;
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
        return jsonResponse.data.children;;
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
            return jsonResponse.data.children;
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