import React from 'react';
import ReactDOM from 'react-dom';

//store & provider & redux-persist
import { store } from './redux/store';
import { Provider } from 'react-redux';


//app
import { App } from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
