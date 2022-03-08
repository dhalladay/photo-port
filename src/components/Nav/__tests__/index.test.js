import React from 'react';
import {render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  //baseline test
  it('renders', () => {
    render(<Nav />);
  });

  //snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
    //assert value comparison
    expect(asFragment).toMatchSnapshot();
  });
})

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
  render(<Nav />);

  expect(screen.getByLabelText('camera')).toHaveTextContent('📸');
  });
})   

describe('links are visible', () => {
  it('inserts text into the links', () => {
    render(<Nav />);
    expect(screen.getByTestId('header')).toHaveTextContent('Oh Snap!');
    expect(screen.getByTestId('about')).toHaveTextContent('About me');
  });
})