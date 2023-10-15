/* eslint-disable no-undef */

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import GridGif from '../GridGif';

jest.mock('../../utils/env', () => ({key: 'qPsZQJFTytqz0J6TqTmCZb58dTWaqyRX', baseUrl: 'https://api.giphy.com/v1/gifs/search'}));


describe('<GridGif />', () => {
    test('should render correctly', () => {
        const component = render(<GridGif category="halo" />);
        expect(component.container).toMatchSnapshot();
    })

    test('should render loading text', () => {
        const component = render(<GridGif category="halo" />);
        expect(component.getByText('...loading')).toBeDefined();
    })

    test('should render gifs', async() => {
        render(<GridGif category="halo" />);
        await waitFor(() => {
            expect(screen.getAllByRole('listitem').length).toBe(10);
        });
    })

    test('should not render gifs', async() => {
        render(<GridGif category="kjwebhorgtiwur4htogiuwererwtherthy" />);
        await waitFor(() => {
            expect(screen.queryAllByRole('listitem')).toEqual([]);
        });
    })
})