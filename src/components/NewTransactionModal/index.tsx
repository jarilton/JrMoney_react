import Modal from 'react-modal';
import entradaImg from '../../assets/Entradas.svg'
import saidaImg from '../../assets/Saídas.svg'
import fecharImg from '../../assets/Fechar.svg'
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { FormEvent, useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps ) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        console.log({
            title,  
            value,
            category,
            type,
        })
    }

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

        
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input 
                    type="title"
                    placeholder='Nome'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input 
                    type='number'
                    placeholder='Valor'
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
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
                    type="category" 
                    placeholder='categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type='submit'>Cadastrar</button>
            </Container>  
        </ Modal>
    )
}