import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import taskStore from './stores/taskStore';

ReactDOM.render(
  <App taskStore={taskStore} />,
  document.getElementById('root')
);

registerServiceWorker();
