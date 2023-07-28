import React, { Component } from 'react'
import Hello from './hello.js'

/*
Props
-------------
부모 컴포넌트로부터 자식컴포넌트가 물려받는 속성, 
Props를 이용해서 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달합니다.

부모에서 받아온 Props는 자식에서 수정이 불가능한데, 
이유는 단방향 데이터 흐름을 지키기 위해 강제로 정해진 것이기 때문입니다.
*/

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Hello text="React"/> 
      </div>
    );
  }
}

export default App;
