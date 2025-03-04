import getRedditPost from '../util/homeAPI/homeAPI';
import homeAPILoad from '../component/loadingHome/homeAPILoad.ts';

jest.mock('../util/homeAPI/homeAPI'); 

it('should return a promise', async() => {
    const expectedValue = {
        status: 'mock',
        children: [{
            data: {}
            },
            {
            data: {}
            },
            {
            data: {}
        }]
    };

    const mockedValue = {
        status: 'mock',
        children: [{
            data: {}
            },
            {
            data: {}
            },
            {
            data: {}
        }]
    };
    
    getRedditPost.mockResolvedValueOnce(mockedValue);
    //act
    const actualValue = await homeAPILoad();
    //assert
    expect(actualValue).toEqual(expectedValue);
})