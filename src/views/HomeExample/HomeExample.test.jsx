import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HomeExample } from './index';

const queryClient = new QueryClient();

describe('HomeExample', () => {
  it('should render', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <HomeExample />
      </QueryClientProvider>,
    );

    expect(screen.getByText('dsvjetl React Starter')).toBeInTheDocument();
  });

  it('should be in loading state', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <HomeExample />
      </QueryClientProvider>,
    );

    expect(screen.getByText('Loading posts...')).toBeInTheDocument();
  });
});
