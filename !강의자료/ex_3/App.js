import React, { Component } from 'react';

import Pagetitle from './components/Pagetitle';
import Blahblah from './components/Blahblah';
import Create from './components/Create';

class App extends Component {
  
  constructor(props){
    super(props);
   
    this.state = {
      date:new Date(),
      pacers:[
        {id:1, backnum:4, name:"Victor Oladipo"},
        {id:2, backnum:33, name:"Myles Turner"},
        {id:3, backnum:11, name:"Domantas Sabonis"}
      ],
      file:0
    }
  }
  
  render() {
    console.log('App js render this.state.file ' + this.state.file); 
    
    return (
      <div>
        
        <Pagetitle maintitle="Pagetitle Component" now={this.state.date}></Pagetitle>
        
        <Blahblah players={this.state.pacers} filename={this.state.file}
        
          changeImage={function (f) {
            this.setState({
              file:f
            })
          }.bind(this)}>
        
        </Blahblah>
        
        <Create addPlayer={function (_backnum, _name) {
            
            var players = this.state.pacers;
            
            console.log(players[players.length - 1].id+1);
            
            var updated = players.concat(
              {id:players[players.length - 1].id+1, backnum:_backnum, name:_name}
            )
            
            this.setState({
              pacers:updated
            }) 
                     
          }.bind(this)}>
        </Create>
      </div>
    );
  }
}

export default App;