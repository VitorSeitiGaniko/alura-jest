import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Saldo from './index';

describe('Saldo', () => {
    test('Deve renderizar o saldo com valor monetário', () => {
        render(<Saldo saldo={1000} />);
        const saldo = screen.getByTestId('saldo');
        expect(saldo).toBeInTheDocument();
        expect(saldo).toHaveTextContent('R$ 1000');
    })
})