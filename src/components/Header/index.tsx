import logoImg from '../../assets/logo.svg'
import { Container } from './styles';


export function Header() {
    return(
        <Container>
            <img src={logoImg} alt="Jr Money" />
            <button type="button" >
                Nova transação
            </button>
        </Container>
    )
}