
const getFunc = jest.fn(() => {
    return Promise.resolve({
        status: '',
        data: {},
    })
})

export default getFunc;

