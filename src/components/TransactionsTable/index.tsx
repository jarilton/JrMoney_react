import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {

    useEffect(() => {
        fetch('http://localhost:3000/api/transactions') 
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>28/01/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.100,00</td>
                        <td>Casa</td>
                        <td>15/01/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}