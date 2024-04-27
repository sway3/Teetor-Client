import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useMutation } from '@tanstack/react-query';
import useLoadEvents from '../../hooks/useLoadEvents';
import EventInfo from './EventInfo';

// Mocking useLoadEvents
vi.mock('../../hooks/useLoadEvents', () => ({
  default: vi.fn(),
}));

// Mocking useMutation from @tanstack/react-query
vi.mock('@tanstack/react-query', () => ({
  useMutation: vi.fn(),
}));

// Mocking axios if used in the API requests
vi.mock('axios', () => ({
  default: {
    patch: vi.fn(() => Promise.resolve({ data: 'patch success' })),
    put: vi.fn(() => Promise.resolve({ data: 'put success' })),
  },
}));

describe('EventInfo Component Tests', () => {
  const mockedMutate = vi.fn();
  beforeEach(() => {
    useLoadEvents.mockImplementation(() => ({
      loadedevents: [],
      isPending: true,
    }));
    useMutation.mockImplementation(() => ({ mutate: mockedMutate }));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('displays a loading message when events are loading', () => {
    useLoadEvents.mockReturnValue({ loadedevents: [], isPending: true });
    render(
      <EventInfo
        sessionId='123'
        pickedDate={new Date(2021, 8, 15)}
        setPickedDate={() => {}}
      />
    );
    expect(screen.getByText('loading..')).toBeInTheDocument();
  });

  it('displays event information when events are loaded', () => {
    useLoadEvents.mockReturnValue({
      loadedevents: [
        {
          _id: '1',
          title: 'Team Meeting',
          description: 'Discuss project updates',
          date: '2021-09-15T14:00:00Z',
        },
      ],
      isPending: false,
    });
    render(
      <EventInfo
        sessionId='123'
        pickedDate={new Date(2021, 8, 15)}
        setPickedDate={() => {}}
      />
    );
    expect(screen.getByText('Team Meeting')).toBeInTheDocument();
    expect(screen.getByText('2021-09-15 14:00')).toBeInTheDocument();
    expect(screen.getByText('Discuss project updates')).toBeInTheDocument();
  });

  it('calls deleteEventReq when the remove button is clicked', async () => {
    useLoadEvents.mockReturnValue({
      loadedevents: [
        {
          _id: '1',
          title: 'Team Meeting',
          description: 'Discuss project updates',
          date: '2021-09-15T14:00:00Z',
        },
      ],
      isPending: false,
    });
    render(
      <EventInfo
        sessionId='123'
        pickedDate={new Date(2021, 8, 15)}
        setPickedDate={() => {}}
      />
    );
    const removeButton = screen.getByText('remove');
    userEvent.click(removeButton);
    await vi.waitFor(() =>
      expect(mockedMutate).toHaveBeenCalledWith({
        sessionId: '123',
        eventId: '1',
      })
    );
  });

  it('enables editing mode when the edit button is clicked', () => {
    useLoadEvents.mockReturnValue({
      loadedevents: [
        {
          _id: '1',
          title: 'Team Meeting',
          description: 'Discuss project updates',
          date: '2021-09-15T14:00:00Z',
        },
      ],
      isPending: false,
    });
    render(
      <EventInfo
        sessionId='123'
        pickedDate={new Date(2021, 8, 15)}
        setPickedDate={() => {}}
      />
    );
    const editButton = screen.getByText('edit');
    userEvent.click(editButton);
    expect(screen.getByText('Save')).toBeInTheDocument(); // Assuming "Save" button appears in edit mode
  });
});
