

const getRedditPosts = async() => {
    const urlToFetch = 'https://www.reddit.com/.json?feed=home';

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.data.children;
        }

    } catch(error) {
        console.log(error);
    }
};


export default getRedditPosts;