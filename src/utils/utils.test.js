import { calculaNovoSaldo } from './index';

describe('Funções de Transação', () => {
    test('Deve retornar o valor do saldo atualizado com rendimento', () => {
        const calcularRendimento = jest.fn((saldo) => saldo + saldo * 0.05);

        const saldo = 100;

        const saldoAtualizado = calcularRendimento(saldo);

        expect(calcularRendimento).toBeCalled();
        expect(calcularRendimento).toHaveBeenCalledWith(saldo);
        expect(saldoAtualizado).toBe(105);
    })

    test('Deve diminuir o valor quando for uma Transferência', () => {
        const transacao = {
            transacao: 'Transferência',
            valor: 10
        };

        const novoSaldo = calculaNovoSaldo(transacao, 100);

        expect(novoSaldo).toBe(90);
    })

    test('Deve aumentar o valor quando for uma Depósito', () => {
        const transacao = {
            transacao: 'Depósito',
            valor: 10
        };

        const novoSaldo = calculaNovoSaldo(transacao, 100);

        expect(novoSaldo).toBe(110);
    })
})
