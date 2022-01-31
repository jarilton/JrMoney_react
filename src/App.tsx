import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOPen, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModal(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <Modal 
        isOpen={isNewTransactionModalOPen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Nova transação</h2>  
      </ Modal>

      <GlobalStyle />
    </>
  );
}


