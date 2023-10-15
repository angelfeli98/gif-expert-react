/* eslint-disable no-undef */

import { renderHook, waitFor } from "@testing-library/react"

import useFetchGifs from '../useFetchGifs';

jest.mock('../../utils/env', () => ({key: 'qPsZQJFTytqz0J6TqTmCZb58dTWaqyRX', baseUrl: 'https://api.giphy.com/v1/gifs/search'}));

describe('useFetchGifs', () => {

    test('should return gifs', async() => {

        const hook = renderHook(() => useFetchGifs('Morty'));
        await waitFor(() => {
            const [isLoading, gifs] = hook.result.current;
            expect(isLoading).toBeFalsy();
            expect(gifs.length).toBeGreaterThan(0);
            expect(gifs.at(0)).toEqual({
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
            })
        })
    })

    test('should return isLoading true', async() => {

        const hook = renderHook(() => useFetchGifs('Morty'));
        await waitFor(() => {
            const [isLoading, gifs] = hook.result.current;
            expect(isLoading).toBeTruthy();
            expect(gifs).toStrictEqual([]);
        })
    })
})