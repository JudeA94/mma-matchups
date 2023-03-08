import React from 'react'
import { render } from '@testing-library/react';
import FightCard from './fightCard';

const mockMatchUps = [
  {
    Active: true,
    FightId: 1,
    Fighters: [{FirstName : 'John', LastName: 'Doe'}, {FirstName : 'Jane', LastName: 'Doe'}]
  },
  {
    Active: false,
    FightId: 2,
    Fighters: [{FirstName : 'Got', LastName: 'Injured'}, {FirstName : 'Pulled', LastName: 'Out'}]
  },
];

describe('MatchUp component', () => {
  test('does not render anything when there are no active fights', () => {
    const mockInactiveMatchUps = [    {      Active: false,      FightId: 3,      Fighters: [],
      },
    ];
    const { container } = render(<FightCard matchUps={mockInactiveMatchUps} />);
    expect(container.firstChild).toBeNull();
  });
  
  test('does not render anything when there are no fighters', () => {
    const mockInactiveFightersMatchUp = [    {      Active: true,      FightId: 4,      Fighters: [],
      },
    ];
    const { container } = render(<FightCard matchUps={mockInactiveFightersMatchUp} />);
    expect(container.firstChild).toBeNull();
  });
  
  test('does not render anything when matchUps is an empty array', () => {
    const { container } = render(<FightCard matchUps={[]} />);
    expect(container.firstChild).toBeNull();
  });
  
  test('only renders fights that are active', () => {
    const { getAllByTestId } = render(<FightCard matchUps={mockMatchUps} />);
    expect(getAllByTestId('fighter1TestId').length).toBe(1);
    expect(getAllByTestId('fighter2TestId').length).toBe(1);
  });
});
