import { render, fireEvent } from '@testing-library/react'
import NavBar from './NavBar'

describe('NavBar', () => {
  const mockSchedule = [
    { EventId: 1, Name: 'Event 1' },
    { EventId: 2, Name: 'Event 2' },
    { EventId: 3, Name: 'Event 3' },
  ]
  const mockSetEventId = jest.fn()
  const mockGetMatchups = jest.fn()

  beforeEach(() => {
    mockSetEventId.mockClear()
    mockGetMatchups.mockClear()
  })

  test('initially renders event title and next button', () => {
    const { getByTestId, queryByTestId } = render(
      <NavBar
        schedule={mockSchedule}
        eventId={1}
        setEventId={mockSetEventId}
        getMatchups={mockGetMatchups}
      />
    )
    expect(getByTestId('eventTitleTestId')).toHaveTextContent('Event 1')
    expect(getByTestId('nextBtnTestId')).toBeInTheDocument()
    expect(queryByTestId('prevBtnTestId')).toBeNull()
  })

  test('clicking next button calls required functions', () => {
    const { getByTestId } = render(
      <NavBar
        schedule={mockSchedule}
        eventId={1}
        setEventId={mockSetEventId}
        getMatchups={mockGetMatchups}
      />
    )
    fireEvent.click(getByTestId('nextBtnTestId'))
    expect(mockSetEventId).toHaveBeenCalledWith(2)
    expect(mockGetMatchups).toHaveBeenCalledWith(1)
  })

  test('clicking prev button calls required functions', () => {
    const { getByTestId } = render(
      <NavBar
        schedule={mockSchedule}
        eventId={1}
        setEventId={mockSetEventId}
        getMatchups={mockGetMatchups}
      />
    )
    fireEvent.click(getByTestId('nextBtnTestId'))
    fireEvent.click(getByTestId('prevBtnTestId'))
    expect(mockSetEventId).toHaveBeenCalledWith(1)
    expect(mockGetMatchups).toHaveBeenCalledWith(1)
  })

  test('renders previous button and changes event text when not on first event', () => {
    const { getByTestId } = render(
      <NavBar
        schedule={mockSchedule}
        eventId={1}
        setEventId={mockSetEventId}
        getMatchups={mockGetMatchups}
      />
    )
    fireEvent.click(getByTestId('nextBtnTestId'))
    expect(getByTestId('prevBtnTestId')).toBeInTheDocument()
    expect(getByTestId('eventTitleTestId')).toHaveTextContent('Event 2')
  })
})
