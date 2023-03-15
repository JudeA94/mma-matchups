import React from 'react'
import { render, act } from '@testing-library/react';
import FightCard from './fightCard';

const mockCard = [
  {
    Active: true,
    FightId: 1,
    Fighters: [{FirstName : 'John', LastName: 'Doe'}, {FirstName : 'Jane', LastName: 'Doe'}]
  },
  {
    Active: true,
    FightId: 2,
    Fighters: [{FirstName : 'John', LastName: 'Doe'}, {FirstName : 'Jane', LastName: 'Doe'}]
  },
  {
    Active: true,
    FightId: 3,
    Fighters: [{FirstName : 'John', LastName: 'Doe'}, {FirstName : 'Jane', LastName: 'Doe'}]
  },
  {
    Active: true,
    FightId: 4,
    Fighters: [{FirstName : 'John', LastName: 'Doe'}, {FirstName : 'Jane', LastName: 'Doe'}]
  },
  {
    Active: true,
    FightId: 5,
    Fighters: [{FirstName : 'John', LastName: 'Doe'}, {FirstName : 'Jane', LastName: 'Doe'}]
  },
  {
    Active: true,
    FightId: 6,
    Fighters: [{FirstName : 'John', LastName: 'Doe'}, {FirstName : 'Jane', LastName: 'Doe'}]
  },
  {
    Active: true,
    FightId: 7,
    Fighters: [{FirstName : 'John', LastName: 'Doe'}, {FirstName : 'Jane', LastName: 'Doe'}]
  },
  {
    Active: false,
    FightId: 8,
    Fighters: [{FirstName : 'Got', LastName: 'Injured'}, {FirstName : 'Pulled', LastName: 'Out'}]
  },
];

describe('FightCard component', () => {
  test('does not render anything when there are no active fights', () => {
    const mockInactiveMatchUps = [    {      Active: false,      FightId: 3,      Fighters: [],
      },
    ];
    const { queryByTestId } = render(<FightCard matchUps={mockInactiveMatchUps} />);
    expect(queryByTestId('matchupTestId')).toBeNull();
  });
  
  test('does not render anything when there are no fighters', () => {
    const mockInactiveFightersMatchUp = [    {      Active: true,      FightId: 4,      Fighters: [],
      },
    ];
    const { queryByTestId } = render(<FightCard matchUps={mockInactiveFightersMatchUp} />);
    expect(queryByTestId('matchupTestId')).toBeNull();
  });
  
  test('does not render anything when matchUps is an empty array', () => {
    const { queryByTestId } = render(<FightCard matchUps={[]} />);
    expect(queryByTestId('matchupTestId')).toBeNull();
  });
  
  test('only renders fights that are active', () => {
    const mockMatchUps = [
      {
        Active: true,
        FightId: 1,
        Fighters: [{FirstName : 'John', LastName: 'Doe'}, {FirstName : 'Jane', LastName: 'Doe'}]
      },
      {
        Active: true,
        FightId: 2,
        Fighters: [{FirstName : 'John', LastName: 'Doe'}, {FirstName : 'Jane', LastName: 'Doe'}]
      },
      {
        Active: false,
        FightId: 3,
        Fighters: [{FirstName : 'Got', LastName: 'Injured'}, {FirstName : 'Pulled', LastName: 'Out'}]
      },
    ];
    const { getAllByTestId } = render(<FightCard matchUps={mockMatchUps} />);
    expect(getAllByTestId('fighter1TestId').length).toBe(2);
    expect(getAllByTestId('fighter2TestId').length).toBe(2);
  });

  test('initially only renders the main card', () => {
    const { getAllByTestId } = render(<FightCard matchUps={mockCard} />);
    expect(getAllByTestId('fighter1TestId').length).toBe(5);
    expect(getAllByTestId('fighter2TestId').length).toBe(5);
  });

  test('renders the under card', () => {
    const { getAllByTestId, getByTestId } = render(<FightCard matchUps={mockCard} />);
    const underCardBtn = getByTestId("underCardBtnTestId")
    act(() => {
      underCardBtn.click()
    });
    expect(getAllByTestId('matchUpTestId').length).toBe(2);
  });

  test('renders the under card', () => {
    const { getAllByTestId, getByTestId } = render(<FightCard matchUps={mockCard} />);
    const underCardBtn = getByTestId("underCardBtnTestId")
    const mainCardBtn = getByTestId("mainCardBtnTestId")

    act(() => {
      underCardBtn.click()
      mainCardBtn.click()
    });
    expect(getAllByTestId('matchUpTestId').length).toBe(5);
  });
});
