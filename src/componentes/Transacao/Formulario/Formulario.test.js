import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Formulário de transação', () => {
    test('Deve renderizar um campo de input', () => {
        render(<Formulario />);
        const input = screen.getByPlaceholderText('Digite um valor');
        expect(input).toBeInTheDocument();
    })

    test('Deve renderizar um campo de input com type number', () => {
        render(<Formulario />);
        const input = screen.getByPlaceholderText('Digite um valor');
        expect(input).toHaveAttribute('type', 'number');
    })

    test('Deve renderizar um campo de input que pode ser preenchido', () => {
        render(<Formulario />);
        const input = screen.getByPlaceholderText('Digite um valor');
        userEvent.type(input, '1000');
        expect(input).toHaveValue(1000);
    })

    test('Deve chamar o evento de onSubmit ao clicar em "Realizar Transação"', () => {
        const realizarTransacao = jest.fn();

        render(<Formulario realizarTransacao={realizarTransacao}/>);
        const button = screen.getByTestId('realizarTransacao');

        userEvent.click(button);
        expect(realizarTransacao).toHaveBeenCalledTimes(1);
    })

    test('Deve selecionar o tipo de transação como esperado', () => {

        render(<Formulario />);
        const select = screen.getByTestId('select-opcoes');
        userEvent.selectOptions(select, 'Depósito');
        expect(select).toHaveValue('Depósito');
        expect(select).not.toHaveValue('Selecione um tipo de transação');
    })


    test('Deve ser possível selecionar uma opção do elemento <select/>', () => {
        render(<Formulario />); // renderiza o componente
        const select = screen.getByRole('combobox'); // faz a consulta do elemento select
        userEvent.selectOptions(select, ['Depósito']); // simula a ação de selecionar uma opção do select
    
        expect(
          screen.getByRole('option', { name: 'Selecione um tipo de transação' })
            .selected
        ).toBe(false); // verifica se a opção de selecionar um tipo de transação não foi selecionada
        expect(screen.getByRole('option', { name: 'Depósito' }).selected).toBe(
          true
        ); // verifica se a opção de depósito foi selecionada
    });
})
