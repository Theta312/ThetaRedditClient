import { screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Index from '../app/page.tsx';
import { renderWithProviders } from '../app/utils/test-utils.tsx';
import getRedditPost from "../util/homeAPI/homeAPI";



jest.mock('../util/homeAPI/homeAPI');





it('component should render a list of items after API returns obj', async() => {
    const mockedValue = [{
            data: { 
                id: 'rega',
                title: 'sdfvaswdf',
                selftext: 'dgvadgfa',
                ups: 2,
                author: 'dfgawerdg',
                thumbnail: 'dgadg', 
            }
            },
            {
            data: {
                id: 'rega',
                title: 'sdfvaswdf',
                selftext: 'dgvadgfa',
                ups: 2,
                author: 'dfgawerdg',
                thumbnail: 'dgadg', 
            }
            },
            {
            data: {
                id: 'rega',
                title: 'sdfvaswdf',
                selftext: 'dgvadgfa',
                ups: 2,
                author: 'dfgawerdg',
                thumbnail: 'dgadg', 
            }
        }];

    getRedditPost.mockResolvedValueOnce(mockedValue);
    renderWithProviders(<Index />)
    const home = await screen.findByTestId('home');
    expect(home).toBeInTheDocument();
})

it('loading should be on screen without render', () => {
    renderWithProviders(<Index />)
    const loading = screen.getByTestId('loading');
    expect(loading).toHaveTextContent('...Loading');
})