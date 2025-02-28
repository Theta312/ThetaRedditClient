
const getRedditPosts = jest.fn(() => {
    return Promise.resolve({
        status: '',
        children: [],
    })
})

export default getRedditPosts;

