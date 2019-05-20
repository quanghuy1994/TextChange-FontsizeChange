import React, {Component} from 'react';

class Sizesetting extends Component{
    channgeSize(value){
        this.props.onChangeSize(value);
    }
    render(){
        return(
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : {this.props.fontsize} px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={ () => this.channgeSize(-2)}>Decrease</button>&nbsp;
                    <button type="button" className="btn btn-success" onClick={ () => this.channgeSize(+2)}>Increase</button>
                </div>
            </div>
        )
    }
}
export default Sizesetting;