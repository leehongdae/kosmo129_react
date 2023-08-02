

import React, {useState} from 'react';
import axios from 'axios';



function EmpSelect() {

	const [data, setData] = useState(null);
 	
 	const onClick = ()=>{
   		axios.get('http://localhost:5000/select').then(reponse => {
      		setData(reponse.data);
    	});
  	}
 
  return (
    <div>
      <div>
        <h3>EMP Select</h3>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && 
        <div>
          <br />
	          EMPNO : {data.empno} <br />
	          ENAME: {data.ename} <br />
	          JOB : {data.job} <br />
        </div>
      }
    </div>
  );
}	

 

export default EmpSelect;


