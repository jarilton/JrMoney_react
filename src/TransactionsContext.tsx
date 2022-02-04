import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAt: string;   
}

// algumas formas para usar o tipo de transações, o normal, Omit e o Pick (Omit mais usado)

/* 
interface TransactionInput {
    title:string;
    amount:number;
    type:string;
    category:string;
} */

//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category' >

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;

interface TransactionsProviderProps {
    children: ReactNode;
}   
interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider( { children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions') 
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(TransactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...TransactionInput,
            createAt: new Date()
        })
        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}> 
            {children}
        </TransactionsContext.Provider>
    )
}
