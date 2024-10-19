import { render, screen } from '@testing-library/react';
import Menu from './index';

test("Deve renderizar um link para a página inicial", () => {
    render(<Menu />);
    const link = screen.getByText('Inicial');
    expect(link).toBeInTheDocument();
})

test("Deve renderizar uma lista de links", () => {
    render(<Menu />);
    const listaLinks = screen.getAllByRole('link');
    expect(listaLinks).toHaveLength(4);
})

test("Não deve renderizar link para Extrato", () => {
    render(<Menu />);
    const linkExtrato = screen.queryByText('Extrato');
    expect(linkExtrato).not.toBeInTheDocument();
})

test("Deve renderizar uma lista de links com a classe link", () => {
    render(<Menu />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
        expect(link).toHaveClass('link');
    })
    expect(links).toMatchSnapshot();
})