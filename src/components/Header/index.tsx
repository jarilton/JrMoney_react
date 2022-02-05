import logoImg from '../../assets/logo.png'

import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Jr Money" /> 
                <h1>Jr Money</h1>
                <button type="button" onClick={onOpenNewTransactionModal} >
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}