import { useState } from 'react';
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles';


export function Header() {

    const [isNewTransactionModalOPen, setIsNewTransactionModal] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModal(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModal(false);
    }

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Jr Money" />
                <button type="button" onClick={handleOpenNewTransactionModal} >
                    Nova transação
                </button>

                <Modal 
                    isOpen={isNewTransactionModalOPen}
                    onRequestClose={handleCloseNewTransactionModal}
                >
                    <h2>Nova transação</h2>
                </Modal>
            </Content>
        </Container>
    )
}