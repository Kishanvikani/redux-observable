import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import rootReducer from './reducers';
import rootEpic from './epics';

import './styles/index.scss';

const epicMiddleware = createEpicMiddleware();

const store = applyMiddleware(epicMiddleware)(createStore)(rootReducer);

epicMiddleware.run(rootEpic);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);

if (module.hot) {
    module.hot.accept();
}
