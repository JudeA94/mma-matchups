import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import MatchUp from './matchUp';

const mockFighters = [
  {
    FirstName: 'John',
    LastName: 'Doe',
  },
  {
    FirstName: 'Jane',
    LastName: 'Doe',
  },
];

describe('MatchUp component', () => {
  test('renders fighters and "VS" text', () => {
    const { getByTestId } = render(<MatchUp fighters={mockFighters} />);
    expect(getByTestId('fighter1TestId')).toBeInTheDocument();
    expect(getByTestId('fighter2TestId')).toBeInTheDocument();
    expect(getByTestId('vsTestId')).toBeInTheDocument();
  });

  test('initializes with first two fighters and "drawer" classes', () => {
    const { getByTestId } = render(<MatchUp fighters={mockFighters} />);
    expect(getByTestId('fighter1TestId')).toHaveClass('drawer');
    expect(getByTestId('fighter2TestId')).toHaveClass('drawer');
  });

  test('changes classes on button click', () => {
    const { getByTestId } = render(<MatchUp fighters={mockFighters} />);
    fireEvent.click(getByTestId('fighter1TestId'));
    expect(getByTestId('fighter1TestId')).toHaveClass('winner');
    expect(getByTestId('fighter2TestId')).toHaveClass('loser');
    fireEvent.click(getByTestId('fighter2TestId'));
    expect(getByTestId('fighter1TestId')).toHaveClass('loser');
    expect(getByTestId('fighter2TestId')).toHaveClass('winner');
    fireEvent.click(getByTestId('fighter2TestId'));
    expect(getByTestId('fighter1TestId')).toHaveClass('drawer');
    expect(getByTestId('fighter2TestId')).toHaveClass('drawer');
  });
});
