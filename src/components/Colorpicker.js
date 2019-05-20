import React, { Component } from 'react';

class Colorpicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors : ['red', 'green', 'blue', 'black']
        }
    }
showColor(color){
    return {
        backgroundColor: color
    }
}
setActiveColor(color){
    this.props.onReceiveColor(color);
    
}

    render() {
        var elmcolor = this.state.colors.map((color, index) => {
            return <span 
            key={index} 
            style={this.showColor(color)} 
            className={this.props.color === color ? 'active': ''}
            onClick = { () => this.setActiveColor(color)} 
            ></span>
        });
        return (
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        {elmcolor}
                    </div>
                </div>
        )
    }
}
export default Colorpicker;