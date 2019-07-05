import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

import App from './components/App';
import rootReducer from './reducers';
import rootEpic from './epics';

// Creates a middleware that accepts the root Epic (similar to root reducer)
const epicMiddleware = createEpicMiddleware();

// Apply that middleware created so that it will fit into the redux flow
const store = applyMiddleware(epicMiddleware)(createStore)(rootReducer);

// Listen to rootEpic (only after store created and middleware attached)
epicMiddleware.run(rootEpic);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

if (module.hot) {
    module.hot.accept();
}
