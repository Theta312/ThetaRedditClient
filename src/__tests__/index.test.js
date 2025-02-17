import { screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Index from '../app/page.tsx';
import { renderWithProviders } from '../app/utils/test-utils.tsx';
import getFunc from "../util/homeAPI/homeAPI";

jest.mock('../util/homeAPI/homeAPI');





it('component should render a list of items after API returns obj', async() => {
    const mockedValue = {
        status: 'mock',
        data: {
            children: [
                {
                    data: {
                            title: 'hello there',
                            id: 1
                    },
                    kind: ''
                },
                {
                    data: {
                            title: 'hello sir',
                            id: 2
                    },
                    kind: ''
                },
                {
                    data: {
                            title: 'hello maam',
                            id: 3
                    },
                    kind: ''
                }
            ]
        }
    };

    getFunc.mockResolvedValueOnce(mockedValue);
    renderWithProviders(<Index />)
    const home = await screen.findByTestId('home');
    expect(home).toBeInTheDocument();
})

it('loading should be on screen without render', () => {
    renderWithProviders(<Index />)
    const loading = screen.getByTestId('loading');
    expect(loading).toHaveTextContent('...Loading');
})