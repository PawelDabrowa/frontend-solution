import { render, screen, waitFor } from '@testing-library/react';
import ApiDataComponent from './ApiDataComponent';
import { getData } from './apiService';

jest.mock('./apiService');
//test for loading state
test('should display loading state initially', () => {
  render(<ApiDataComponent />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
//test for data
test('should display data when API call is successful', async () => {
  (getData as jest.Mock).mockResolvedValueOnce({ data: [{ id: '1', name: 'Test' }] });
  render(<ApiDataComponent />);
  await waitFor(() => screen.getByText(/backend data/i));
  expect(screen.getByText(/test/i)).toBeInTheDocument();
});
//test for error messge
test('should display error message on API failure', async () => {
  (getData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
  render(<ApiDataComponent />);
  await waitFor(() => screen.getByText(/error: failed to fetch/i));
  expect(screen.getByText(/error: failed to fetch/i)).toBeInTheDocument();
});
