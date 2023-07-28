import React, { useState } from 'react';
import axios from 'axios';


/*
React 에서 서버와 통신하기 
------------------------------------
React에는 HTTP Client(HTTP 상에서 커뮤니케이션을 하는 자바 기반 컴포넌트) 내장 클래스가 존재하지 않는다.
HTTP Client 라이브러리에는 Fetch API, Axios가 있다.
Reactjs로 프론트 페이지 개발 중 Axios로 API를 호출하는 가장 기본적인 방법


Axios : 
Axios는 공식 Docs에 의하면, 
브라우저와 Node.js를 위한 Pormise 기반 HTTP 클라이언트
------------------------------------
npm install axios
yarn add axios


1. 비동기로 서버에 요청
2. 서버의 응답이 오면 받아서 성공/실패 구분처리
axios().then().catch();
then() : 통신 성공
catch() : 통신 실패

4가지 기본 파라미터
method
url
data : optional
params : optional

axios();
axios.get();
axios.post();
axios.put();
axios.delete();

axios({
    method: "get",
    url: "url",
    responseType: "type"
}).then(function (response) {
    // response Action
}).catch(function(error){

})

*/

function App() {
    
    // photos, setPhotos 비구조화 할당
    let [photos, setPhotos] = useState([]);

    // 통신 메서드
    function searchApi() {
        const url = "https://jsonplaceholder.typicode.com/photos";
        axios.get(url)
        .then(function(response) {
            setPhotos(response.data);
            console.log("성공");
        })
        .catch(function(error) {
            console.log("실패");
        })
        
    }

    // 조회 데이터 존재할 경우
    if(photos.length > 0) {
        return (
            photos.map(photo => (
                (photo.id < 10) ? (
                    <div key={photo.id}>
                        <img src={photo.thumbnailUrl} alt="img" />
                        <p>title : {photo.title}</p>
                    </div>)
                : null
            ))
        );
    } else { // 조회 데이터 존재하지 않을 경우
        return (
            <div>
                <button onClick={searchApi}> 불러오기 </button>
            </div>
        )
    }
}

export default App;