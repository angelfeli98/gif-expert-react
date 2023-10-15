/* eslint-disable no-undef */
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CategoryInput from '../CategoryInput';

describe('<CategoryInput />', () => {

    let onNewValue;

    beforeEach(() => onNewValue = jest.fn());

    test('should render correctly', () => {
        const { container } = render(<CategoryInput onNewValue={onNewValue} />);
        expect(container).toMatchSnapshot();
    })

    test('should change value', () => {
        render(<CategoryInput onNewValue={onNewValue} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'Morty'}});
        expect(input).toHaveValue('Morty');
    })

    test('should set new value', () => {
        render(<CategoryInput onNewValue={onNewValue} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'Morty'}});
        fireEvent.keyUp(input, {key: 'Enter'});
        expect(onNewValue).toHaveBeenCalledWith('Morty');
    })

    test('should not set new value', () => {
        render(<CategoryInput onNewValue={onNewValue} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: ''}});
        fireEvent.keyUp(input, {key: 'Enter'});
        expect(onNewValue).not.toHaveBeenCalled();
    })
})