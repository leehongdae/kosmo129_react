import React from 'react';
import Users from './Users';

function App() {
  return <Users />;
}

export default App;

/*
-------------------------
Ajax
-------------------------
Asynchronous JavaScript And XML의 약자이며,
자바스크립트를 이용해 클라이언트와 서버 간에 데이터를 주고받는 비동기 HTTP 통신입니다.
XMLHttpRequest(XHR) 객체를 이용해서 전체 페이지가 아닌 필요한 데이터만 불러올 수 있습니다.

장점
------
Jquery를 통해 쉽게 구현 가능
Error, Success, Complete의 상태를 통해 실행 흐름 조절 가능

단점
------
Jquery를 사용해야 간편하고 호환성이 보장됨
Promise 기반이 아님

-------------------------
axios
-------------------------
axios는 Node.js와 브라우저를 위한 Promise API를 활용하는 HTTP 통신 라이브러리입니다.
비동기로 HTTP 통신을 할 수 있으며 return을 promise 객체로 해주기 때문에 response 데이터를 다루기 쉽습니다.

장점
------
response timeout (fetch에는 없는 기능) 처리 방법이 존재
Promise 기반으로 만들어졌기 때문에 데이터 다루기 편리
브라우저 호환성이 뛰어남

단점
------
사용을 위해 모듈 설치 필요 (npm install axios)

-------------------------
fetch
-------------------------
ES6부터 들어온 JavaScript 내장 라이브러리입니다.
Promise 기반으로 만들어졌기 때문에 axios와 마찬가지로 데이터 다루기가 쉽고,
내장 라이브러리라는 장점으로 상당히 편리합니다.

장점
------
자바스크립트의 내장 라이브러리 이므로 별도로 import 할 필요가 없음
Promise 기반으로 만들어졌기 때문에 데이터 다루기 편리
내장 라이브러리이기 때문에 업데이트에 따른 에러 방지가 가능

단점
------
지원하지 않는 브라우저가 존재 (IE11...)
네트워크 에러 발생 시 response timeout이 없어 기다려야 함
JSON으로 변환해주는 과정 필요
상대적으로 axios에 비해 기능이 부족


[데이터 넘기는 방법]
axios : 객체로 넘김
fetch : string화 해서 넘김

[정상적인 요청/응답 체크]
axios : status 값이 200인지, statusText를 통해서 확인
fetch : response 객체가 ok프로퍼티를 포함하는지 확인

[response 얻는 방법]
axios : response 객체의 data property에 접근하여 얻는다.
fetch : response 객체에 .json() 메소드를 호출하여서 json객체를 얻는다.

*/