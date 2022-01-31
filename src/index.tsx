import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

//Servidor API fake
createServer({
  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return [
        {
          id: 1,
          name: 'Jamal',
          title: 'Transaction 1',
          amout: 400,
          type: 'deposit',
          category: 'food',
          createdAt: new Date()
        },
        {
          id: 2,
          name: 'Marie',
          title: 'Transaction 2',
          amout: 990,
          type: 'withraw',
          category: 'vehicle',
          createdAt: new Date()
        },
        {
          id: 3,
          name: 'Tom',
          title: 'Transaction 3',
          amout: 159,
          type: 'withraw',
          category: 'home',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);