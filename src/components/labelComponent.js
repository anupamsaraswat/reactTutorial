import React, { Component } from 'react';

export  class Label extends Component{

  render(){
    const{key,value}=this.props;
    return(
         <li>{value}
         <input type="checkbox" onClick={()=>{
           console.log('click');
         }}/></li>
    );
  }

}

//export default Label;
