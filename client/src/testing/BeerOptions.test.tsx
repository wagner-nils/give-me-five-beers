// import { vi } from 'vitest';
// import { describe, expect, it } from 'vitest';
// import { render, fireEvent, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { configReducer } from '../redux/configSlice'; 
// import BeerOptions from '../components/BeerOptions'; 
// import '@testing-library/jest-dom'; // wE need this for the toBeInTheDocument() assertion, but apperantly this is how you do it right even though you are usingjest

// // Mockey, mockey the redux storey
// const mockStore = configureStore({ reducer: { config: configReducer } });

// describe('BeerOptions Component', () => {
//   it('renders without crashing', () => {
//     render(
//       <Provider store={mockStore}>
//         <BeerOptions setType={() => {}} />
//       </Provider>
//     );
//     expect(screen.getByText('Fancy some drinks')).toBeInTheDocument();
//     expect(screen.getByText('Explore the world')).toBeInTheDocument();
//   });

//   it('dispatches the correct action on button click', () => {
//     const mockSetType = vi.fn(); // just like jest.fn()
//     render(
//       <Provider store={mockStore}>
//         <BeerOptions setType={mockSetType} />
//       </Provider>
//     );

//     fireEvent.click(screen.getByText('Fancy some drinks'));
//     expect(mockSetType).toHaveBeenCalledWith('bar');

//     fireEvent.click(screen.getByText('Explore the world'));
//     expect(mockSetType).toHaveBeenCalledWith('brewery');
//   });
// });

import { vi } from 'vitest';
import { describe, expect, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import BeerOptions from '../components/BeerOptions'; 
import '@testing-library/jest-dom'; 

describe('BeerOptions Component', () => {
  it('renders without crashing', () => {
    const mockSetType = vi.fn();
    render(<BeerOptions setType={mockSetType} />);

    expect(screen.getByText('Fancy some drinks')).toBeInTheDocument();
    expect(screen.getByText('Explore the world')).toBeInTheDocument();
  });

  it('calls setType with correct argument on button click', () => {
    const mockSetType = vi.fn();
    render(<BeerOptions setType={mockSetType} />);

    fireEvent.click(screen.getByText('Fancy some drinks'));
    expect(mockSetType).toHaveBeenCalledWith('bar');

    fireEvent.click(screen.getByText('Explore the world'));
    expect(mockSetType).toHaveBeenCalledWith('brewery');
  });
});
