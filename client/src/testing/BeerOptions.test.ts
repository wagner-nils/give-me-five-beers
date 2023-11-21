import { render, fireEvent, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { configReducer } from '../redux/configSlice'; 
import BeerOptions from '../components/BeerOptions'; 

// Mockey, mockey the redux storey
const mockStore = configureStore({ configReducer });

describe('BeerOptions Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={mockStore}>
        <BeerOptions setType={() => {}} />
      </Provider>
    );
    expect(screen.getByText('Fancy some drinks')).toBeInTheDocument();
    expect(screen.getByText('Explore the world')).toBeInTheDocument();
  });

  it('dispatches the correct action on button click', () => {
    const mockSetType = jest.fn();
    render(
      <Provider store={mockStore}>
        <BeerOptions setType={mockSetType} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Fancy some drinks'));
    expect(mockSetType).toHaveBeenCalledWith('bar');

    fireEvent.click(screen.getByText('Explore the world'));
    expect(mockSetType).toHaveBeenCalledWith('brewery');
  });
});
