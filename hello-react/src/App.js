import React from 'react';
import MyComponent from './MyComponent'; //1. 모듈 불러오기

const App = () => {
  return (
    <div>
      <MyComponent name="React"/> {/*2. MyComponet props 값 지정 O*/}
      <br/>
      <MyComponent/> {/*3. MyComponet props 값 지정 X */}
      <br/>
      <MyComponent>리액트</MyComponent> {/*4. props.children */}
      <br/>
      <MyComponent name={3}/> {/* MyComponent에서 타입을 지정 중이므로 오류발생 */}
    </div>
  );
};

export default App;