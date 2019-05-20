import React, {Component} from 'react';
import './App.css';
import Result from './components/Result';
import Sizesetting from './components/Sizesetting';
import Colorpicker from './components/Colorpicker';
import Reset from './components/Reset';

class App extends Component{
constructor(prop){
  super(prop);
  this.state = {
    color: 'red',
    fontSize: 12
  };
}
onSetColor = (params) =>{
  this.setState({
    color: params
  });
}
onChangeSize =(param) =>{
  if(this.state.fontSize +param >=8 && this.state.fontSize + param <=36){
    this.setState({
      fontSize : this.state.fontSize + param
    })  
  }
}
onSettingDefault = (value) =>{
  if(value){
    this.setState({
      color: 'red',
      fontSize: 12
    })
  }
}
  render(){
    return(
      <div className='container mt-50'>
      <div className='row'>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Colorpicker color={this.state.color} onReceiveColor={this.onSetColor} />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Sizesetting fontsize={this.state.fontSize} onChangeSize={this.onChangeSize}/>
          <Reset onSettingDefault={this.onSettingDefault}/>
        </div>
        <Result color={this.state.color} fontsize={this.state.fontSize} />
      </div>
    </div>
    );
  }
}
export default App;