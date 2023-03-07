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
  test('only renders fights that are active', () => {
    const { getAllByTestId } = render(<FightCard matchUps={mockMatchUps} />);
    expect(getAllByTestId('fighter1TestId').length).toBe(1);
    expect(getAllByTestId('fighter2TestId').length).toBe(1);
  });
});
