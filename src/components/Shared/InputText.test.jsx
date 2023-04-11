import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import InputText from '../Shared/InputText';

describe('InputText', () => {
    it('should render the component onto the screen', async () => {

        render(<InputText onChangeHandler={()=>console.log('change')} searchValue={"testval"} />);
        expect(screen.getByTestId('search-input')).toBeInTheDocument();

    });
});
