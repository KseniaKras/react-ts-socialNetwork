import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import state, {store} from "./redux/state";

test('renders learn react link', () => {
  render(<App state={store.getState()}
              dispatch={store.dispatch.bind(store)}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
