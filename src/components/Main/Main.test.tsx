import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';


import Main from './Main';


describe('Main', () => {
    let originFetch: { (input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>; (input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>; };

    beforeEach(() => {
        originFetch = (global).fetch;
    });
    afterEach(() => {
        (global).fetch = originFetch;
    });
    it('should pass', async () => {
        const fakeResponse = { title: 'example text' };
        const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
        const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
        (global).fetch = mockedFetch;
        const { getByTestId } = render(<Main />);       
        expect(mockedFetch).toBeCalledTimes(1);
        expect(mRes.json).toBeCalledTimes(1);
    });
});

