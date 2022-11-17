import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/



test('renders Grok Tennis heading', () => {
    render(<App />);
    const header = screen.getByText(/Grok Tennis/i);
    expect(header).toBeInTheDocument();
});


test('renders 0-0 score at start', () => {
    render(<App />);
    const score = screen.getByText(/0-0/i);
    expect(score).toBeInTheDocument();
});

test('clicking the first increment button increases player 1 score to 15', async () => {
    const {container} = render(<App />);
    const score = screen.getByText(/0-0/i);
    const buttons = container.getElementsByTagName('button');

    expect(buttons.length).toEqual(2);
    await buttons[0].click();
    expect(score.textContent).toEqual("15-0");
});

test('clicking the second increment button increases player 2 score to 15', async () => {
    const {container} = render(<App />);
    const score = screen.getByText(/0-0/i);
    const buttons = container.getElementsByTagName('button');

    await buttons[1].click();
    expect(score.textContent).toEqual("0-15");
});

test('check all scores are translated correctly', async () => {
    const {container} = render(<App />);
    const score = screen.getByText(/0-0/i);
    const buttons = container.getElementsByTagName('button');

    await buttons[0].click();
    expect(score.textContent).toEqual("15-0");
    await buttons[0].click();
    expect(score.textContent).toEqual("30-0");
    await buttons[0].click();
    expect(score.textContent).toEqual("40-0");
});


test('confirm the win result appears after a dominating 4-0 streak', async () => {
    const {container} = render(<App />);
    const score = screen.getByText(/0-0/i);
    const buttons = container.getElementsByTagName('button');

    await buttons[0].click();
    await buttons[0].click();
    await buttons[0].click();
    await buttons[0].click();
    expect(score.textContent).toEqual("Player One Wins!");
});


test('test the advantage case', async () => {
    const {container} = render(<App />);
    const score = screen.getByText(/0-0/i);
    const buttons = container.getElementsByTagName('button');

    await buttons[0].click();
    await buttons[0].click();
    await buttons[0].click();
    await buttons[1].click();
    await buttons[1].click();
    await buttons[1].click();
    await buttons[0].click();
    expect(score.textContent).toEqual("Player One Advantage");
});

test('test the deuce case', async () => {
    const {container} = render(<App />);
    const score = screen.getByText(/0-0/i);
    const buttons = container.getElementsByTagName('button');

    await buttons[0].click();
    await buttons[0].click();
    await buttons[0].click();
    await buttons[1].click();
    await buttons[1].click();
    await buttons[1].click();
    await buttons[0].click();
    await buttons[1].click();
    expect(score.textContent).toEqual("Deuce");
});

test("test 'advantage' -> 'deuce' -> 'advantage' -> 'win'", async () => {
    const {container} = render(<App />);
    const score = screen.getByText(/0-0/i);
    const buttons = container.getElementsByTagName('button');

    await buttons[0].click();
    await buttons[0].click();
    await buttons[0].click();
    await buttons[1].click();
    await buttons[1].click();
    await buttons[1].click();
    await buttons[0].click();
    await buttons[1].click();
    await buttons[0].click();
    await buttons[0].click();
    expect(score.textContent).toEqual("Player One Wins!");
});

test('test game ceases after a win', async () => {
    const {container} = render(<App />);
    const score = screen.getByText(/0-0/i);
    const buttons = container.getElementsByTagName('button');

    await buttons[0].click();
    await buttons[0].click();
    await buttons[0].click();
    await buttons[1].click();
    await buttons[1].click();
    await buttons[1].click();
    await buttons[0].click();
    await buttons[1].click();
    await buttons[0].click();
    await buttons[0].click();
    await buttons[1].click(); // win button spamming after loss
    await buttons[1].click();
    await buttons[1].click();
    await buttons[1].click();
    await buttons[1].click();
    expect(score.textContent).toEqual("Player One Wins!");
});