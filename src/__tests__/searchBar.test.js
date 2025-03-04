import { screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import SearchBar from '../component/loadingSearch/SearchBar.tsx';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../app/utils/test-utils.tsx';




it('should render the search bar', async() => {
    
    renderWithProviders(<SearchBar />);
    
    const searchBar = screen.getByRole('textbox');
    expect(searchBar).toBeInTheDocument();
        
})
it('should render the search button', async() => {
    
    renderWithProviders(<SearchBar />);
    
    const searchButton = screen.getByRole('button');
    expect(searchButton).toBeInTheDocument();
})
it('should have a value when typed in', async() => {
    
    renderWithProviders(<SearchBar />);

    const searchBar = screen.getByRole('textbox');
    await userEvent.type(searchBar, 'testing');
    expect(searchBar).toHaveValue('testing');
})