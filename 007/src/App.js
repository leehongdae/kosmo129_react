import React, { useState} from 'react'
import axios from 'axios';

const App = ()  => {
  const [data, setData] = useState(null);
    const onClick = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments/1').then(response=>{
      setData(response.data);
    });
  }

  return (
    <div>
      <div>
        <h3>AxiosTest</h3>
        <button onClick={onClick}>Import</button>
      </div>
    
    {data &&
      <div>
        <br/>
        Number : {data.postId} <br/>
        ID : {data.id} <br/>
        Name : {data.name} <br/>
        Email : {data.email} <br/>
        Body : {data.body} <br/>
      </div>
    }
    </div>
  );
}

export default App;