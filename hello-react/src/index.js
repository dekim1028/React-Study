import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 컴포넌트를 페이지에 렌더링
ReactDOM.render(
  // 첫번째 파라미터 : 페이지에 렌더링 할 내용 (JSX)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  // 두번째 파라미터 : 첫번째 파라미터를 렌더링할 document 내부 요소 => ../public/index.html 참고
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
