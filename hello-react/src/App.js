import React from 'react';       /* 1. React를 불러와서 사용할 수 있게 해줌 => 번들러 사용 */
//import logo from './logo.svg'; /* 2. svg 파일 로드 => file-loader */
//import './App.css';            /* 3. css 파일 로드 => css-loader */
                                 /* 4. 최신 자바스크립트 문법을 ES5로 변환 => babel-loader */

import './App.css'

//5. App 컴포넌트 생성 (함수형 컴포넌트)
function App() {
  
  const name = "리액트";
  const name1 = "리웩트";

  const number = 0;

  const style = {
    backgroundColor:'black', // background-color => backgroundColor
    color:'aqua',
    fontSize:'48px', // font-size => fontSize
    fontWeight:'bold', // font-weight => fontWeight
    padding: 16
  }

  //6. JSX 코드
  return (
    // 6-1. 컴포넌트에서 여러 요소를 하나의 요소로 꼭 감싸주어야함 => 컴포넌트 내부는 하나의 DOM트리 구조로 이루어져야 한다는 규칙이 있기 때문
    <>
      <h1> {name} 안녕 </h1> { /* 6-2. JSX 내부에서 {}를 사용하여 자바스크립트 표현식 사용가능 */ }
      <h2> 잘 동작하니? </h2>

      {/* 6-3. if문 대신 삼항 연산자 사용 */}
      {name === '리액트'?(<h1>리액트입니다.</h1>):(<h1>리액트가 아닙니다.</h1>)} 
      {name === '리액트'?(<h1>리액트입니다.</h1>):null} 

      {/* 6-4. 조건부 렌더링 */}
      {name1 === '리액트' && <h1>리액트입니다.</h1>} 

      {/* 6-4. 조건부 렌더링(예외) */}
      {number && <div>내용</div>} 

      {/* 6-6. 카멜 표기법 작성 */}
      <div style={style}>{name}</div>
      <div style={{
        backgroundColor:'black', // background-color => backgroundColor
        color:'aqua',
        fontSize:'48px', // font-size => fontSize
        fontWeight:'bold', // font-weight => fontWeight
        padding: 16
      }}>{name}</div>

      {/* 6-7. class 대신 className */}
      <div className="react">{name}</div>

      {/* 6-7. 태그 닫기 */}
      <input/>
    </>
  );

  // 6-5. undefined 렌더링 금지
  // return undefined; (X)
  // return undefined || "값이 undefined 입니다." (O)
  // return <div>{undefined}</div> (O)
}

export default App;
