import { Container } from "./styles";

import entradaImg from '../../assets/Entradas.svg'
import saidaImg from '../../assets/Saídas.svg'
import totalImg from '../../assets/Total.svg'

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradaImg} alt="Entrada" />
                    <strong>R$1.000,00</strong>
                </header>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidaImg} alt="Saída" />
                    <strong>- R$500,00</strong>
                </header>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                    <strong>R$500,00</strong>
                </header>
            </div>

        </Container>
    )
}