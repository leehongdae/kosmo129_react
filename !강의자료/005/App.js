import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Counter from './Counter.js'

/*
State는 컴포넌트 내에서 동적으로 변동되는 데이터를 관리하며, 
언제나 기본 값을 미리 설정해야 사용할 수 있습니다.
*/
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          number: 0
      };
  }
  
  //함수 실행시 number값이 1 증가
  handleIncrease = () => {
    const { number } = this.state;
    
    //this.setState는 state의 값을 변경할 때 사용 하는 함수
    this.setState({
      number: number + 1
    });
  }

  render() {
        return (
          <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter 
                  handleIncrease={this.handleIncrease}
                  number={this.state.number}
                />
            </header>
          </div>
        );
    }
}
export default App;