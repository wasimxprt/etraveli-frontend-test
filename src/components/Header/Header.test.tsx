import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
    test('renders without crash', async () => {
        const { container } = render(<Header />);

        expect(screen.getByText('Etraveli')).toBeInTheDocument();
        expect(container.getElementsByClassName('container-fluid').length).toBe(1);
    });
});