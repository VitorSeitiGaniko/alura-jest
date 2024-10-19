import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Extrato from './index';

describe('Componente de extrato', () => {
    test('Deve renderizar uma lista de transações', () => {
        const transacao = [
            { 
                transacao: 'Depósito', 
                valor: 50 
            },
        ];

        render(<Extrato transacoes={transacao}/>);
        const transacoesLista = screen.getByRole('listitem');    
        expect(transacoesLista).toBeInTheDocument(); 
    })
})