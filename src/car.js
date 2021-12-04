
import React from 'react';
import './logsigh.css';
class Car extends React.Component{
    render(){
        return(<img className = "imagebox" height = "100" width = "100" src = {this.props.pic}></img>)
    }
}
class Name extends React.Component{
    render(){
        return(<div className = "t1">{this.props.name}</div>)
    }
}

class Final extends React.Component{
    render(){
        return(<div className = {this.props.class}> 
            <Car pic = {this.props.pic}/>
            <Name name = {this.props.name}/>
        </div>)
    }
}

export default Final;
// class Details extends React.Component{
//     render(){
//         return(<div className = "details">
//                 <p>Engine : {this.props.engine}</p><br/>
//                 <p>Year of manufacture : {this.props.year}</p><br/>
//                 <p>Remarks : {this.props.remarks}</p><br/>
//                 </div>)
//     }
// }