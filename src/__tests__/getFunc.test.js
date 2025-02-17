import getFunc from '../util/homeAPI/homeAPI';
import homeAPILoad from '../app/component/loadingHome/homeAPILoad.ts';

jest.mock('../util/homeAPI/homeAPI'); 

it('should return a promise', async() => {
    const expectedValue = [{
        data: {},
        kind: ''
    }, {
        data: {},
        kind: ''
    }, {
        data: {},
        kind: ''
    }];

    const mockValue = {
        status: 'mock',
        data: {
            children: [
                {
                    data: {},
                    kind: ''
                },
                {
                    data: {},
                    kind: ''
                },
                {
                    data: {},
                    kind: ''
                }
            ]
        }
    };
    
    getFunc.mockResolvedValueOnce(mockValue);
    //act
    const actualValue = await homeAPILoad();
    //assert
    expect(actualValue).toEqual(expectedValue);
})