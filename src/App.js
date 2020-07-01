import React from 'react';
import {connect} from 'react-redux';
import { Button } from 'antd-mobile';

class App extends React.Component{
	handelBtn=()=>{
	}
	parentCallback=(...obj)=>{
		console.log(obj)
	}
	render(){
		console.log(this.props.unm)
		return (
		  <div className="App">
			  <Button onClick={this.handelBtn}>Start</Button>
			  <Btn name="123" callback={this.parentCallback}/>
		  </div>
		);	
	}
}

class Btn extends React.Component {
  constructor(props) {
    super(props);
	alert(props.name)	//父--->子，通信
    this.name = 'MyComponent';
  }

  handleClick = () => {
	this.props.callback('123','456');	//子--->父通信  
  };

	render() {
    return (
      <div>
        <button onClick={this.handleClick}>子传父</button>
      </div>
    );
  }
}
//connect方法引入store
const mapStateToProps=(state)=>{
  return {
	  unm:state
  }
}

const mapDispathToProps=(dispatch)=>{
  return{

  }
}
export default connect(mapStateToProps,mapDispathToProps)(App);
