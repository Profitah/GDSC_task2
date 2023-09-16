import React from 'react'; //useEffect는 pubilc에 있는 html 내용을 저장하고 state는 public에 있는 html을 불러온다고 함. 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Page1 from './page/Page1';
import Page2 from './page/Page2';
import Page3 from './page/Page3';
import Page4 from './page/Page4';
import Main from './page/Main';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Main />} /> {/*element : 랜더링 할 컴포넌트*/}
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/Page4" element={<Page4 />} />


      </Routes>
    </BrowserRouter>
  )
};
export default App; //App 컴포넌트를 React 애플리케이션의 기본 컴포넌트로 지정해 React가 시작될 때 App 컴포넌트가 랜더링 되게 함.


