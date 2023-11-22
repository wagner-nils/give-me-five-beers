import {describe, expect, it, vi} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import TodoBtns from '../components/TodoBtns'


describe('TodoList', () => {
    const mockHandleClick = vi.fn();
    const mockType = '';


    it('should render the buttons', () => {
        render(
            <TodoBtns 
            type={mockType} 
            handleClick={mockHandleClick}
            />
        )

        expect(screen.getByText('completed it')).toBeInTheDocument()
        expect(screen.getByText('not completed, let it go')).toBeInTheDocument()
        expect(screen.getByText('move to tomorrow')).toBeInTheDocument()
    })

    it('should call handleClick when buttons are clicked', () => {
        render(
            <TodoBtns 
            type={mockType} 
            handleClick={mockHandleClick}
            />)
            
        const completeButton = screen.getByText('completed it');
        
        expect(mockHandleClick).toHaveBeenCalledTimes(0);

        fireEvent.click(completeButton);

        expect(mockHandleClick).toHaveBeenCalledTimes(1);
        })

})