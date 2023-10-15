/* eslint-disable no-undef */

import fetchApi from '../gif';

jest.mock('../../utils/env', () => ({key: 'qPsZQJFTytqz0J6TqTmCZb58dTWaqyRX', baseUrl: 'https://api.giphy.com/v1/gifs/search'}));

describe('gif', () => {
    test('should call api correctly', async() => {
        const { data } = await fetchApi(`?api_key=qPsZQJFTytqz0J6TqTmCZb58dTWaqyRX&q=halo&limit=10`);
        expect(data.length).toBe(10);
    })
})