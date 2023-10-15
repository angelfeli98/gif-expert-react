/* eslint-disable no-undef */

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';

import GifExpertApp from "../GifExpertApp";

jest.mock('../utils/env', () => ({key: 'qPsZQJFTytqz0J6TqTmCZb58dTWaqyRX', baseUrl: 'https://api.giphy.com/v1/gifs/search'}));

describe('<GifExpertApp/>', () => {
    test('should render', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    })

    test('should complete flow', async() => {
        render(<GifExpertApp />);
        fireEvent.change(screen.getByRole('textbox'), {target: {value: 'Morty'}});
        fireEvent.keyUp(screen.getByRole('textbox'), {key: 'Enter'});
        await waitFor(() => {
            expect(screen.getByRole('heading', {level: 2})).toHaveTextContent('Morty');
        })
    })

    test('should not complete flow', async() => {
        render(<GifExpertApp />);
        fireEvent.change(screen.getByRole('textbox'), {target: {value: ''}});
        fireEvent.keyUp(screen.getByRole('textbox'), {key: 'Enter'});
        await waitFor(() => {
            expect(screen.queryByText('Morty')).toBeNull();
        })
    })
})