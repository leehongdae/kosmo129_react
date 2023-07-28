import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*
axios API 를 호출하는 라이브러리

axios의 GET, PUT, POST, DELETE 등의 메서드를 이용하여 데이터 관리
REST API
GET: 데이터 조회
POST: 데이터 등록
PUT: 데이터 수정
DELETE: 데이터 제거

import axios from 'axios';

axios.get('/users/1');

useState 와 useEffect 로 데이터 로딩하기

useState : 요청 상태를 관리
useEffect : 컴포넌트가 렌더링되는 시점에 요청을 시작 ([]빈배열 = 처음에만 렌더링)

요청에 대한 상태를 관리 (총 3가지 상태 관리)
요청의 결과
로딩 상태
에러
*useEffect 에 첫번째 파라미터로 등록하는 함수에는 async 를 사용 할 수 없기 때문에
함수 내부에서 async 를 사용하는 새로운 함수를 선언

*/

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
  );
}

export default Users;