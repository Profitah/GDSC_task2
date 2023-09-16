import React from 'react';
import { useNavigate } from 'react-router-dom';

function Index() {
    let n = useNavigate();
    
    const page1load = () => {
        console.log(n);
        n('Page1');
    };

    const page2load = () => {
        console.log(n);
        n('Page2');
    };

    const page3load = () => {
        console.log(n);
        n('Page3');
    };

    const page4load = () => {
        console.log(n);
        n('Page4');
    };
    return (
        <div>
            <h1 id='title'>9월 12일 GDSC 과제입니다.</h1>

            <button onClick={page1load}>Quiz1</button>
            <button onClick={page2load}>Quiz2</button>
            <button onClick={page3load}>Quiz3</button>
            <button onClick={page4load}>Quiz4</button>
        </div>
    );
}

export default Index;