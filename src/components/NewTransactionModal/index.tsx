import Modal from 'react-modal';
import entradaImg from '../../assets/Entradas.svg'
import saidaImg from '../../assets/Saídas.svg'
import fecharImg from '../../assets/Fechar.svg'
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps ) {

    const [type, setType] = useState('deposit');

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
                    <RadioBox
                        type='button'
                        onClick={() => {setType('deposit')}}
                        isActive = {type === 'deposit'}
                        ActiveColor='green'
                    >
                        <img src={entradaImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type='button'
                        onClick={() => {setType('withdraw')}}
                        isActive = {type === 'withdraw'}
                        ActiveColor='red'
                    >
                        <img src={saidaImg} alt="Saída" /> 
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                    placeholder='calegoria'
                />

                <button type='submit'>Cadastrar</button>
            </Container>  
        </ Modal>
    )
}