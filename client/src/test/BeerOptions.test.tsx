import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import rootReducer from 'path-to-your-root-reducer';
import { configReducer } from '../redux/configSlice';
import { vi } from 'vitest';
import { describe, expect, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import BeerOptions from '../components/BeerOptions';

describe('BeerOptions Component', () => {
  it('renders without crashing', () => {
    const mockSetType = vi.fn();
    const store = createStore(configReducer); // Create a store with your root reducer

    render(
      <Provider store={store}>
        <BeerOptions setType={mockSetType} />
      </Provider>
    );

    expect(screen.getByText('Fancy some drinks')).toBeInTheDocument();
    expect(screen.getByText('Explore the world')).toBeInTheDocument();
  });

  it('calls setType with correct argument on button click', () => {
    const mockSetType = vi.fn();
    const store = createStore(configReducer); // Create a store with your root reducer

    render(
      <Provider store={store}>
        <BeerOptions setType={mockSetType} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Fancy some drinks'));
    expect(mockSetType).toHaveBeenCalledWith('bar');

    fireEvent.click(screen.getByText('Explore the world'));
    expect(mockSetType).toHaveBeenCalledWith('brewery');
  });

});
