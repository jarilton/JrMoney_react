import Modal from 'react-modal';
import entradaImg from '../../assets/Entradas.svg'
import saidaImg from '../../assets/Saídas.svg'
import fecharImg from '../../assets/Fechar.svg'
import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps ) {
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={fecharImg} alt="Fechar modal" />
            </button>

        
            <Container>
                <h2>Cadastrar transação</h2>

                <input 
                    placeholder='Nome'
                />

                <input 
                    type='number'
                    placeholder='Preço'
                />

                <TransactionTypeContainer>
                    <button
                        type='button'
                    >
                        <img src={entradaImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button 
                        type='button'
                    >
                        <img src={saidaImg} alt="Saída" /> 
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <input 
                    placeholder='calegoria'
                />

                <button type='submit'>Cadastrar</button>
            </Container>  
        </ Modal>
    )
}