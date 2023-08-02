import React, { useState } from "react";
import axios from "axios";

export default () => {
 
  const [Empno, SetEmpno] = useState("");
  const [Ename, SetEname] = useState("");
  const [Job, SetJob] = useState("");

  const empnoHandler = (e) => {
    e.preventDefault();
    SetEmpno(e.target.value);
  };

  const enameHandler = (e) => {
    e.preventDefault();
    SetEname(e.target.value);
  };

  const jobHandler = (e) => {
    e.preventDefault();
    SetJob(e.target.value);
  };

  const submitHandler =  (e) =>  async{
    e.preventDefault();
    // state에 저장한 값을 가져옵니다.
    console.log(Empno);
    console.log(Ename);
    console.log(Job);

    let bodys = {
      empno: Empno,
      ename: Ename,
      job: Job,
    };

    axios
      .post("http://localhost:5000/create", bodys)
      .then((res) => console.log(res));
  };

  return (
    <>
      <div style={{ display: "flex", width: "100%", height: "100vh", }}>
        <form onSubmit={submitHandler} style={{ display: "flex", flexDirection: "Column" }}>          
	      	<table border="1">
			  	<tr>
					<td>EMPNO</td>
					<td><input type="empno" value={Empno} onChange={empnoHandler}></input></td>
			  	</tr>
			  	<tr>
					<td>ENAME</td>
					<td><input type="ename" value={Ename} onChange={enameHandler}></input></td>
			  	</tr>
			  	<tr>
					<td>JOB</td>
					<td><input type="job" value={Job} onChange={jobHandler}></input></td>
			  	</tr>		  	
			   	<tr>
					<td colspan="2"><button type="submit">보내기</button></td>				
			  	</tr>
		  	</table>
        </form>
      </div>
    </>
  );
};