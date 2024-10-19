import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Transacoes from './index';
import estilos from '../Extrato.module.css';

describe('Componente de extrato', () => {   
    test('Deve renderizar o mesmo componente com props atualizadas', () => {
        const transacao01 = { 
            transacao: 'Depósito', 
            valor: 50 
        }; 

        const { rerender } = render(<Transacoes estilos={estilos} transacao={transacao01} />);
        
        const transacaoTipo01 = screen.getByTestId('tipoTransacao');
        const transacaoValor01 = screen.getByTestId('valorTransacao');

        expect(transacaoTipo01).toHaveTextContent('Depósito')
        expect(transacaoValor01).toHaveTextContent('R$ 50')

        const transacao02 = { 
            transacao: 'Transferência', 
            valor: 20 
        };

        rerender(<Transacoes estilos={estilos} transacao={transacao02} />);

        const transacaoTipo02 = screen.getByTestId('tipoTransacao');
        const transacaoValor02 = screen.getByTestId('valorTransacao');

        expect(transacaoTipo02).toHaveTextContent('Transferência')
        expect(transacaoValor02).toHaveTextContent('- R$ 20')

    })
})