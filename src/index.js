import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// 1. 최상위 노드에 BrowserRouter 태그를 추가한다. App내의 어디서든
// React Router을 사용할 수 있도록 설정
ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)