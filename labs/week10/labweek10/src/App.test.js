import { render, screen } from '@testing-library/react';
import App from './App';

test('renders data entry form heading', () => {
  render(<App />);
  expect(screen.getByText(/data entry form/i)).toBeInTheDocument();
});