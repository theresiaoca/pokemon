import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const text = screen.getByAltText(/logo/i);
  expect(text).toBeInTheDocument();
});
