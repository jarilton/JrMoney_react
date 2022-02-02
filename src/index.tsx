import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

//Servidor API fake
createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento web',
          type: 'deposit',
          category: 'Dev',
          amount: 8000,
          createAt: new Date('2022-01-01 10:00:00')
        },
        {
          id: 2,
          title: 'Fatura cartão de crédito',
          type: 'withdraw',
          category: 'Boletos',
          amount: 1500,
          createAt: new Date('2021-02-02 18:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => { 
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);