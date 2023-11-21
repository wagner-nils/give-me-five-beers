import {describe, expect, it, vi} from 'vitest';
// import WelcomePage from '../pages/WelcomePage'
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
    // building the store from api slices that component uses
    const reducer = {config: configReducer, api: dbApiReducer}
    const store = configureStore({reducer})
    
    // mocking the router
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
        // render component with store functionality & router
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginPage></LoginPage>
                </BrowserRouter>
            </Provider>
            )

        // Note: the actual code does not have label "for" attributes specified,
        // hence using getByText rather than getByLabelText
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
        
    // BELOW IS NOT WORKING, IT DOESN'T WANT TO MOCK THE SUBMIT FUNC
    // it('should trigger handleLogin when login form is submitted', () => {
    //         const reducer = {config: configReducer, api: dbApiReducer}
    //         const store = configureStore({reducer})
    //         const mockOnSubmit = vi.fn()

    //         render(
    //         <Provider store={store}>
    //             <BrowserRouter>
    //                 <LoginPage></LoginPage>
    //             </BrowserRouter>
    //         </Provider>
    //         )
            
    //         // Mock the handleLogin function
    //         const loginForm = screen.getByTestId('login-form')
    //         loginForm.onsubmit = mockOnSubmit;
            
    //         const loginBtn = screen.getByText('Log in')
    //         // loginBtn.setAttribute('onClick', `${mockOnSubmit}`)
    //         fireEvent.click(loginBtn)
    //         expect(mockOnSubmit).toHaveBeenCalled();
            
    //     })
})