/* eslint-disable no-undef */

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Gif from '../Gif';

let gif = {
    title: 'Mira este gif',
    url: 'https://url.example.com',
}

describe('<Gif />' , () => {
    test('should render', () => {
        const {container} = render(<Gif gif={gif} />);
        expect(container).toMatchSnapshot();
    })

    test('should render props porpertly', () => {
        const component = render(<Gif gif={gif} />);
        expect(component.getByRole('img')).toHaveAttribute('src', gif.url);
        expect(component.getByRole('img')).toHaveAttribute('alt', gif.title);
        expect(component.getByText(gif.title).closest('p')).toBeInTheDocument();
    })
})