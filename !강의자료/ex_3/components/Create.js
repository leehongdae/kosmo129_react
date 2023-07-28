import React, { Component } from 'react';

class Create extends Component {
  render() {   
    return(
	    <addplayer>       
	    	
	       <form id="addPlayerFrm" onSubmit={function (event) {
		       		// input태그에 입력받은 값에 접근하기 위해 onSubmit함수
		    	    // event.target.input태그의 name.vlaue
		           	event.preventDefault();
		           	//console.log(event.target.backnum.value, event.target.name.value);
		           	this.props.addPlayer(event.target.backnum.value, event.target.name.value);
	       		}.bind(this)}
	       >
	       <h2>선수 추가</h2>
	           <p><input type="text" name="backnum" placeholder="back number"></input></p>
	           <p><input type="text" name="name" placeholder="full name"></input></p>
	           <p><input type="submit" value="선수 등록"></input></p>
	       </form>
	    </addplayer>
    );
  }
}

export default Create;