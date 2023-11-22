import {describe, expect, it, vi} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import { beforeEach } from 'node:test';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import LoginPage from '../pages/LoginPage'
import {configReducer } from '../redux/configSlice'
import { dbApiReducer } from '../redux/apiSlice';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';



describe("TodoList", () => {
    const reducer = {config: configReducer, api: dbApiReducer}
    const store = configureStore({reducer})
    
    beforeEach(() => {
        vi.mock('react-router-dom', async (importOriginal) => {
        const mod = await importOriginal<typeof import('react-router-dom')>()
        return {
        ...mod,
        useNavigate: () => vi.fn(),
        }
    })
    }); 

    it('should render the labels', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginPage></LoginPage>
                </BrowserRouter>
            </Provider>
            )
        expect(screen.getByText('Username:')).toBeInTheDocument();
        expect(screen.getByText('Password:')).toBeInTheDocument();
        })

    it('should switch between showing & hiding password when img is clicked', () => {
        const reducer = {config: configReducer, api: dbApiReducer}
        const store = configureStore({reducer})
        
        render(
        <Provider store={store}>
            <BrowserRouter>
                <LoginPage></LoginPage>
            </BrowserRouter>
        </Provider>
        )

        const password = screen.getByTestId('password');
        const toggleShowingPassword = screen.getByAltText('see password');


        expect(password.getAttribute('type') === 'password')

        fireEvent.click(toggleShowingPassword)

        expect(password.getAttribute('type') === 'text')

    })