import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Chat from '../Chat';

test('initially displays the chat icon', () => {
  render(<Chat />);
  const chatIcon = screen.getByText('💬');
  expect(chatIcon).toBeInTheDocument();
});

test('opens the chat window when the chat icon is clicked', () => {
  render(<Chat />);
  const chatIcon = screen.getByText('💬');
  fireEvent.click(chatIcon);
  const chatHeader = screen.getByText('Chat');
  expect(chatHeader).toBeInTheDocument();
});

test('closes the chat window when the close button is clicked', () => {
  render(<Chat />);
  const chatIcon = screen.getByText('💬');
  fireEvent.click(chatIcon);
  const closeButton = screen.getByText('X');
  fireEvent.click(closeButton);
  expect(screen.queryByText('Chat')).not.toBeInTheDocument();
});