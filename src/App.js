import {Home, SelectDateMenu, Account, Test} from './template/index'
import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selMenu" element={<SelectDateMenu />}/>
        <Route path="/account/:day" element={<Account />} />
        {/*<Route path="/product/*" element={<Product />}></Route>*/}
        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
        {/*<Route path="*" element={<NotFound />}></Route>*/}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
