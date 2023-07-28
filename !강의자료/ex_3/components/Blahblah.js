import React, { Component } from 'react';


class Blahblah extends Component {

  render() {
    
    console.log('Blahblah js render this.props.filename ' + this.props.filename);   
    
    var playerlist = [];
    
    var list = this.props.players;
    
    for(var i=0; i<list.length; i++) {
      
      playerlist.push(<li key={list[i].id} >                     
        
                        <a href="/" value={list[i].id} onClick={function (event) {
                          
                          event.preventDefault();                        
                          
                          this.props.changeImage(event.target.getAttribute('value'));
                        }.bind(this)}>
                        No {list[i].backnum} {list[i].name} </a> 
                      </li>);
    }

    return (
      <content>
        <h3>여기는 content</h3>
        <ul>
          {playerlist}
        </ul>       
      </content>
    );
  }
}

export default Blahblah;