import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../components/Like"

/**
 * El componente muestra en el párrafo el valor "Likes: 0".
 */
test('default value is 0', () => {
  render(<Like />);
  const banner = screen.getByText('Likes: 0');

  expect(banner).toBeInTheDocument();
});

/**
 * Cuando se hace clic en el botón Like, el número de likes se incremente en uno.
 */
test('increment by 1 after the button was clicked', () => {
  render(<Like />);
  fireEvent.click(screen.getByText('Like'));
  const banner = screen.getByText('Likes: 1');

  expect(banner).toBeInTheDocument();
});

/**
 * cuando se hace clic en el botón Dislike el número de likes se decrementa en uno.
 */
test('decrement by 1 after the button was clicked', () => {
  render(<Like />);
  fireEvent.click(screen.getByText('Dislike'));
  const banner = screen.getByText('Likes: -1');

  expect(banner).toBeInTheDocument();
});
