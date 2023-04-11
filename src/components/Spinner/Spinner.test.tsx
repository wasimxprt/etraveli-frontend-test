import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner component', () => {
    test('renders react component', async () => {

        const { container } = render(<Spinner />);
                
         expect(container.getElementsByClassName('overlay').length).toBe(1);
         expect(container.getElementsByClassName('spinner').length).toBe(1);
    });

});